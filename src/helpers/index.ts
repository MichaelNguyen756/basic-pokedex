import { PokemonMoveVersion } from '../types/api';

export function isVersionGroupRedBlue(v: PokemonMoveVersion) {
  return v.version_group.name === 'red-blue';
}

export function toUpperFirst(word: string) {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
}

export function formatText(text = '') {
  const [firstWord, ...additionalWords] = text.split('-');

  if (firstWord === 'hp') {
    return firstWord.toUpperCase();
  }

  return [toUpperFirst(firstWord), ...additionalWords].join(' ');
}
