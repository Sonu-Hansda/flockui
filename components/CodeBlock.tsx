'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CodeBlock({
    code,
    highlightedLight,
}: {
    code: string
    highlightedLight: string
}) {
    const [copied, setCopied] = useState(false)

    const highlightedCode = highlightedLight

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Fallback for browsers without clipboard API
            const textarea = document.createElement('textarea')
            textarea.value = code
            textarea.style.position = 'fixed'
            textarea.style.opacity = '0'
            document.body.appendChild(textarea)
            textarea.select()
            document.execCommand('copy')
            document.body.removeChild(textarea)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <div className="relative group rounded-xl overflow-hidden border border-slate-200 h-full flex flex-col">
            {/* Padding wrapper so code never touches the border */}
            <div
                className="overflow-auto text-sm flex-1 [&>pre]:p-5 [&>pre]:h-full [&>pre]:m-0"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg
                   bg-black/5 hover:bg-black/10 
                   text-slate-600 hover:text-slate-900 
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