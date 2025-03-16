import { PokemonMoveVersion } from '../types/api';

export function isVersionGroupRedBlue(v: PokemonMoveVersion) {
  return v.version_group.name === 'red-blue';
}

/**
 * The function `toUpperFirst` takes a string as input and returns the same string with the first
 * letter capitalized.
 * @param {string} word - The `word` parameter in the `toUpperFirst` function is a string that
 * represents the word for which you want to capitalize the first letter.
 * @returns The function `toUpperFirst` takes a string as input and returns the same string with the
 * first letter capitalized.
 */
export function toUpperFirst(word: string) {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
}

/**
 * The `formatText` function in TypeScript takes a text input, splits it by hyphens, capitalizes the
 * first word if it is 'hp', and returns the formatted text.
 * @param [text] - The `formatText` function takes a `text` parameter as input. This function splits
 * the text by hyphens ('-') and capitalizes the first word. If the first word is 'hp', it returns 'HP'
 * in uppercase. Otherwise, it capitalizes the first word and joins
 * @returns The function `formatText` is returning the formatted text based on the input text. If the
 * first word of the input text is 'hp', it will return 'HP' in uppercase. Otherwise, it will
 * capitalize the first letter of the first word and join the words with spaces before returning the
 * formatted text.
 */
export function formatText(text = '') {
  const [firstWord, ...additionalWords] = text.split('-');

  if (firstWord === 'hp') {
    return firstWord.toUpperCase();
  }

  return [toUpperFirst(firstWord), ...additionalWords].join(' ');
}
