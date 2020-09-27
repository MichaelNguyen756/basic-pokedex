import { formatText } from '../stringFormat';

test(`take the string "hp" and return it as full uppercase`, () => {
    expect(formatText('hp')).toBe('HP');
});

test(`return an empty string when an empty string is parsed`, () => {
    expect(formatText('')).toBe('');
});

test(`return the upper case version of a word`, () => {
    expect(formatText('small')).toBe('Small');
});

test(`take a kebab cased word and return a string which contains the capitalised first word`, () => {
    expect(formatText('kebab-case')).toBe('Kebab case');
});

test('an undefined string should return an empty string', () => {
    expect(formatText()).toBe('');
});
