import fs from 'fs'
import path from 'path'

export function getComponentCode(
    component: string,
    variant: string
): string {
    const filePath = path.join(
        process.cwd(),
        'registry',
        component,
        variant,
        `${component}_${variant}.dart`
    )

    if (!fs.existsSync(filePath)) {
        return '// component not found'
    }

    return fs.readFileSync(filePath, 'utf-8')
}