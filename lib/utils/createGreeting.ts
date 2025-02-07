export function createGreeting(name?: string): string {
    return name === undefined ? "Howdy" : `Why hello there, ${name}.`
}