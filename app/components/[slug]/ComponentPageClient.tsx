'use client'

import { useState } from 'react'
import { Code2, Eye } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'
import ComponentPreview from '@/components/ComponentPreview'

interface VariantData {
    variant: string
    code: string
    highlightedDark: string
    highlightedLight: string
    hasPreview: boolean
}

interface Meta {
    name: string
    tag: string
    color: string
    description: string
}

type ViewMode = 'preview' | 'code'

export default function ComponentPageClient({
    slug,
    meta,
    variantData,
}: {
    slug: string
    meta: Meta
    variantData: VariantData[]
}) {
    const [selectedVariant, setSelectedVariant] = useState(variantData[0]?.variant ?? '')
    const [viewMode, setViewMode] = useState<ViewMode>('preview')

    const current = variantData.find(d => d.variant === selectedVariant) ?? variantData[0]

    if (!current) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
                <p className="text-slate-500">No variants found.</p>
            </div>
        )
    }

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
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {meta.tag}
                        </span>
                    </div>
                </div>

                {/* Mobile View Toggle — only visible below lg */}
                <div className="lg:hidden mb-4">
                    <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 w-fit">
                        <button
                            onClick={() => setViewMode('preview')}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                viewMode === 'preview'
                                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                            }`}
                        >
                            <Eye className="h-4 w-4" />
                            Preview
                        </button>
                        <button
                            onClick={() => setViewMode('code')}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                viewMode === 'code'
                                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                            }`}
                        >
                            <Code2 className="h-4 w-4" />
                            Code
                        </button>
                    </div>
                </div>

                {/* Variant Tabs */}
                {variantData.length > 1 && (
                    <div className="mb-8 flex gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1 w-fit">
                        {variantData.map((data) => {
                            const isActive = selectedVariant === data.variant
                            return (
                                <button
                                    key={data.variant}
                                    onClick={() => setSelectedVariant(data.variant)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all duration-200 ${
                                        isActive
                                            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                                    }`}
                                >
                                    {data.variant.replace(/-/g, ' ')}
                                </button>
                            )
                        })}
                    </div>
                )}

                {/* Code (left) + Preview (right) on desktop; toggled on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Code section — hidden on mobile when preview is active */}
                    <div className={`flex flex-col gap-2 ${viewMode === 'code' ? 'block' : 'hidden'} lg:block`}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                            Code
                        </p>
                        <div className="flex-1 flex flex-col">
                            <CodeBlock
                                code={current.code}
                                highlightedLight={current.highlightedLight}
                            />
                        </div>
                    </div>

                    {/* Preview section — hidden on mobile when code is active */}
                    <div className={`flex flex-col gap-2 ${viewMode === 'preview' ? 'block' : 'hidden'} lg:block`}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                            Preview
                        </p>
                        <ComponentPreview component={slug} variant={current.variant} hasPreview={current.hasPreview} />
                    </div>
                </div>

            </div>
        </div>
    )
}
