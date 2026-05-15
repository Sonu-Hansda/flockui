export function getPreviewUrl(
    component: string,
    variant: string
): string | null {
    const baseUrl = process.env.NEXT_PUBLIC_PREVIEW_BASE_URL

    if (!baseUrl) {
        return null
    }

    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl

    return `${normalizedBaseUrl}/previews/${component}/${variant}/index.html`
}