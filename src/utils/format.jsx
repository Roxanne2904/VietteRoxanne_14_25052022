export function formatAString(string) {
    const currentString = string
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    return currentString
}
