import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { codeToHtml } from 'shiki'
import { getComponentCode } from '@/lib/get-component-code'
import CodeBlock from '@/components/CodeBlock'
import ComponentPreview from '@/components/ComponentPreview'
import { componentMeta } from '@/lib/component-meta'

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
        const [highlightedDark, highlightedLight] = await Promise.all([
            codeToHtml(code, { lang: 'dart', theme: 'dark-plus' }),
            codeToHtml(code, { lang: 'dart', theme: 'github-light' }),
        ])
        let hasPreview = true;
        if (process.env.NODE_ENV === 'development') {
            const previewPath = path.join(process.cwd(), 'public', 'previews', slug, variant, 'index.html');
            hasPreview = fs.existsSync(previewPath);
        }

        return { variant, code, highlightedDark, highlightedLight, hasPreview }
    }))

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm text-slate-400 mb-1 capitalize">
                        Components / {meta.name}
                    </p>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                        {meta.name}
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl">
                        {meta.description}
                    </p>
                    <div className="flex gap-2 mt-4">
                        <span
                            className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                            {meta.tag}
                        </span>
                    </div>
                </div>

                {/* Variants Loop */}
                {variantData.map((data) => (
                    <div key={data.variant} className="mb-16">
                        {/* Variant label */}
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white capitalize">
                                {data.variant}
                            </h2>
                        </div>

                        {/* Code (left) + Preview (right) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                            <div className="flex flex-col gap-2">
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Code
                                </p>
                                <div className="flex-1 flex flex-col">
                                    <CodeBlock
                                        code={data.code}
                                        highlightedDark={data.highlightedDark}
                                        highlightedLight={data.highlightedLight}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                    Preview
                                </p>
                                <ComponentPreview component={slug} variant={data.variant} hasPreview={data.hasPreview} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
