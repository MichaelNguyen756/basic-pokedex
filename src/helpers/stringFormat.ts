export function toUpperFirst(word: string): string {
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
}

export function formatText(text: string): string {
    const [firstWord, ...additionalWords] = text.split('-');

    if (firstWord === 'hp') {
        return firstWord.toUpperCase();
    }

    return [toUpperFirst(firstWord), ...additionalWords].join(' ');
}
