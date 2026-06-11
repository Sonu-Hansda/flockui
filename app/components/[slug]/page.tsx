import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { codeToHtml } from 'shiki'
import { getComponentCode } from '@/lib/get-component-code'
import { componentMeta } from '@/lib/component-meta'
import ComponentPageClient from './ComponentPageClient'
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { softwareSourceCodeJsonLd } from '@/lib/json-ld';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = componentMeta[slug];
  const name = meta?.name ?? slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${name} | FlockUI`,
    description: meta?.description ?? `${name} Flutter UI component — preview, copy, and paste into your project.`,
    alternates: {
      canonical: `/components/${slug}`,
    },
  };
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const registryPath = path.join(process.cwd(), 'registry', slug)

    if (!fs.existsSync(registryPath)) {
        notFound()
    }

    const variants = fs.readdirSync(registryPath).filter(item => {
        return fs.statSync(path.join(registryPath, item)).isDirectory()
    })

    const meta = componentMeta[slug] || {
        name: slug.charAt(0).toUpperCase() + slug.slice(1),
        tag: 'Component',
        color: 'bg-slate-100 text-slate-800 border-slate-200',
        description: `A ${slug} component for your Flutter applications.`,
    }

    const variantData = await Promise.all(variants.map(async (variant) => {
        const code = getComponentCode(slug, variant)
        const highlightedLight = await codeToHtml(code, { lang: 'dart', theme: 'github-light' })
        let hasPreview = true;
        if (process.env.NODE_ENV === 'development') {
            const previewPath = path.join(process.cwd(), 'public', 'previews', slug, variant, 'index.html');
            hasPreview = fs.existsSync(previewPath);
        }

        return { variant, code, highlightedLight, hasPreview }
    }))

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                <Breadcrumbs items={[
                    { name: 'Components', href: '/components' },
                    { name: meta.name, href: `/components/${slug}` },
                ]} />
            </div>
            <JsonLd
                id="component-schema"
                json={softwareSourceCodeJsonLd(meta.name, meta.description, slug)}
            />
            <ComponentPageClient
                slug={slug}
                meta={meta}
                variantData={variantData}
            />
        </>
    )
}
