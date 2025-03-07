type colourTypes = {
  default: string;
  light: string;
  dark: string;
};

type pokemonTypeColours = {
  [pokemonType: string]: colourTypes;
};

export const BORDER_SETTING = '1px solid #000000';

export const POKEMON_TYPES = {
  NORMAL: 'normal',
  FIGHTING: 'fighting',
  FLYING: 'flying',
  POISON: 'poison',
  GROUND: 'ground',
  ROCK: 'rock',
  BUG: 'bug',
  GHOST: 'ghost',
  STEEL: 'steel',
  FIRE: 'fire',
  WATER: 'water',
  GRASS: 'grass',
  ELECTRIC: 'electric',
  PSYCHIC: 'psychic',
  ICE: 'ice',
  DRAGON: 'dragon',
  DARK: 'dark',
  FAIRY: 'fairy',
  STELLAR: 'stellar',
  UNKNOWN: 'unknown',
};

export const TYPE_COLOURS: pokemonTypeColours = {
  bug: {
    light: '#C6D16E',
    default: '#A8B820',
    dark: '#6D7815',
  },
  dark: {
    light: '#A29288',
    default: '#705848',
    dark: '#49392F',
  },
  dragon: {
    light: '#A27DFA',
    default: '#7038F8',
    dark: '#4924A1',
  },
  electric: {
    light: '#FAE078',
    default: '#F8D030',
    dark: '#A1871F',
  },
  fairy: {
    light: '#F4BDC9',
    default: '#EE99AC',
    dark: '#9B6470',
  },
  fighting: {
    light: '#D67873',
    default: '#C03028',
    dark: '#7D1F1A',
  },
  fire: {
    light: '#F5AC78',
    default: '#F08030',
    dark: '#9C531F',
  },
  flying: {
    light: '#C6B7F5',
    default: '#A890F0',
    dark: '#6D5E9C',
  },
  ghost: {
    light: '#A292BC',
    default: '#705898',
    dark: '#493963',
  },
  grass: {
    light: '#A7DB8D',
    default: '#78C850',
    dark: '#4E8234',
  },
  ground: {
    light: '#EBD69D',
    default: '#E0C068',
    dark: '#927D44',
  },
  ice: {
    light: '#BCE6E6',
    default: '#98D8D8',
    dark: '#638D8D',
  },
  normal: {
    light: '#C6C6A7',
    default: '#A8A878',
    dark: '#6D6D4E',
  },
  poison: {
    light: '#C183C1',
    default: '#A040A0',
    dark: '#682A68',
  },
  psychic: {
    light: '#FA92B2',
    default: '#F85888',
    dark: '#A13959',
  },
  rock: {
    light: '#D1C17D',
    default: '#B8A038',
    dark: '#786824',
  },
  steel: {
    light: '#D1D1E0',
    default: '#B8B8D0',
    dark: '#787887',
  },
  water: {
    light: '#9DB7F5',
    default: '#6890F0',
    dark: '#445E9C',
  },
};
