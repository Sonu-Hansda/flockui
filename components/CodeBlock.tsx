'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

export default function CodeBlock({
    code,
    highlightedDark,
    highlightedLight,
}: {
    code: string
    highlightedDark: string
    highlightedLight: string
}) {
    const [copied, setCopied] = useState(false)
    const { theme } = useTheme()

    const highlightedCode = theme === 'dark' ? highlightedDark : highlightedLight

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
            {/* Padding wrapper so code never touches the border */}
            <div
                className="overflow-auto text-sm flex-1 [&>pre]:p-5 [&>pre]:h-full [&>pre]:m-0"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg
                   bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20
                   text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white
                   transition-all duration-200
                   opacity-0 group-hover:opacity-100"
            >
                {copied
                    ? <Check className="h-4 w-4 text-green-500" />
                    : <Copy className="h-4 w-4" />
                }
            </button>
        </div>
    )
}