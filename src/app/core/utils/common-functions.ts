export function randomizeArrayOrder<T>(arrayToOrder: T[]): T[] {
    const shuffledItems: T[] = [...arrayToOrder];
    for (let i: number = shuffledItems.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }

    return shuffledItems;
}

export function mergeArrayWithItems<T>(array: T[], ...items: T[]): T[] {
    return [...array, ...items];
}
