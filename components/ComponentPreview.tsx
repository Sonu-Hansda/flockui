'use client'

import { useState } from 'react'
import { Monitor, Smartphone } from 'lucide-react'
import { getPreviewUrl } from '@/lib/get-preview-url'

const platforms = [
    { id: 'mobile', icon: Smartphone, label: 'Mobile' },
    { id: 'desktop', icon: Monitor, label: 'Desktop' },
]

export default function ComponentPreview({
    component,
    variant,
}: {
    component: string
    variant: string
}) {
    const [activePlatform, setActivePlatform] = useState('mobile')
    const src = getPreviewUrl(component, variant)

    if (!src) {
        return <div>Preview not available. Please set up R2.</div>
    }

    return (
        <div className="flex flex-col gap-3">

            {/* Platform switcher */}
            <div className="flex items-center gap-1 bg-slate-100
                      dark:bg-slate-800 rounded-lg p-1 w-fit">
                {platforms.map((p) => {
                    const Icon = p.icon
                    const isActive = activePlatform === p.id
                    return (
                        <button
                            key={p.id}
                            onClick={() => setActivePlatform(p.id)}
                            title={p.label}
                            className={`p-2 rounded-md transition-all duration-200 ${isActive
                                ? 'bg-white dark:bg-slate-700 text-flutter-blue shadow-sm'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                        </button>
                    )
                })}
            </div>

            {/* Preview window */}
            <div
                className="w-full flex justify-center items-center rounded-2xl border
                   border-slate-200 dark:border-slate-700 p-6"
                style={{ minHeight: '480px' }}
            >
                {activePlatform === 'mobile' ? (
                    /* Phone outline frame */
                    <div className="relative flex-shrink-0"
                        style={{ width: '280px' }}>
                        {/* Phone shell */}
                        <div className="relative rounded-[2.5rem] border-[8px]
                                border-slate-800 dark:border-slate-600
                                bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
                            style={{ height: '560px' }}>

                            {/* Notch / Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2
                                    w-20 h-5 bg-slate-800 dark:bg-slate-600
                                    rounded-full z-10" />

                            {/* Side buttons — purely decorative */}
                            <div className="absolute -right-[10px] top-24 w-[4px] h-12
                                    bg-slate-700 dark:bg-slate-500 rounded-r-full" />
                            <div className="absolute -left-[10px] top-20 w-[4px] h-8
                                    bg-slate-700 dark:bg-slate-500 rounded-l-full" />
                            <div className="absolute -left-[10px] top-32 w-[4px] h-8
                                    bg-slate-700 dark:bg-slate-500 rounded-l-full" />
                            <div className="absolute -left-[10px] top-44 w-[4px] h-8
                                    bg-slate-700 dark:bg-slate-500 rounded-l-full" />

                            {/* Screen */}
                            <iframe
                                src={src}
                                className="w-full h-full border-none"
                                title={`${component} ${variant} preview`}
                            />
                        </div>
                    </div>
                ) : (
                    /* Desktop: full-width iframe in a simple rounded frame */
                    <div className="w-full rounded-xl overflow-hidden border
                            border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                        style={{ minHeight: '420px' }}>
                        <iframe
                            src={src}
                            className="w-full border-none"
                            style={{ minHeight: '420px' }}
                            title={`${component} ${variant} preview`}
                        />
                    </div>
                )}
            </div>

        </div>
    )
}