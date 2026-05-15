import { codeToHtml } from 'shiki'
import { getComponentCode } from '@/lib/get-component-code'
import CodeBlock from '@/components/CodeBlock'
import ComponentPreview from '@/components/ComponentPreview'

export default async function ButtonPage() {
    const code = getComponentCode('button', 'default')

    const [highlightedDark, highlightedLight] = await Promise.all([
        codeToHtml(code, { lang: 'dart', theme: 'dark-plus' }),
        codeToHtml(code, { lang: 'dart', theme: 'github-light' }),
    ])

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm text-slate-400 mb-1">
                        Components / Buttons
                    </p>
                    <h1 className="text-4xl font-extrabold text-slate-900
                         dark:text-white mb-3">
                        Button
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl">
                        A versatile button widget with multiple variants,
                        sizes, and interactive states.
                    </p>
                    <div className="flex gap-2 mt-4">
                        {['Interactive', 'Forms', 'Elements'].map(tag => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-3 py-1 rounded-full
                           bg-slate-100 dark:bg-slate-800
                           text-slate-600 dark:text-slate-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Variant label */}
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                        Default
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                        The standard filled button for primary actions.
                    </p>
                </div>

                {/* Code (left) + Preview (right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-widest
                          text-slate-400">
                            Code
                        </p>
                        <div className="flex-1 flex flex-col">
                            <CodeBlock
                                code={code}
                                highlightedDark={highlightedDark}
                                highlightedLight={highlightedLight}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs font-semibold uppercase tracking-widest
                          text-slate-400">
                            Preview
                        </p>
                        <ComponentPreview component="button" variant="default" />
                    </div>
                </div>

            </div>
        </div>
    )
}