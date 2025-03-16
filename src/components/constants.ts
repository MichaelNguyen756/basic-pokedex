type colourTypes = {
  default: string;
  light: string;
  dark: string;
};

type pokemonTypeColours = {
  [pokemonType: string]: colourTypes;
};

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
};

export const COLOR_VARIANTS: pokemonTypeColours = {
  bug: {
    light: 'bg-[#C6D16E] text-[#ffffff]',
    default: 'bg-[#A8B820] text-[#ffffff]',
    dark: 'bg-[#6D7815] text-[#ffffff]',
  },
  dark: {
    light: 'bg-[#A29288] text-[#ffffff]',
    default: 'bg-[#705848] text-[#ffffff]',
    dark: 'bg-[#49392F] text-[#ffffff]',
  },
  dragon: {
    light: 'bg-[#A27DFA] text-[#ffffff]',
    default: 'bg-[#7038F8] text-[#ffffff]',
    dark: 'bg-[#4924A1] text-[#ffffff]',
  },
  electric: {
    light: 'bg-[#FAE078] text-[#ffffff]',
    default: 'bg-[#F8D030] text-[#ffffff]',
    dark: 'bg-[#A1871F] text-[#ffffff]',
  },
  fairy: {
    light: 'bg-[#F4BDC9] text-[#ffffff]',
    default: 'bg-[#EE99AC] text-[#ffffff]',
    dark: 'bg-[#9B6470] text-[#ffffff]',
  },
  fighting: {
    light: 'bg-[#D67873] text-[#ffffff]',
    default: 'bg-[#C03028] text-[#ffffff]',
    dark: 'bg-[#7D1F1A] text-[#ffffff]',
  },
  fire: {
    light: 'bg-[#F5AC78] text-[#ffffff]',
    default: 'bg-[#F08030] text-[#ffffff]',
    dark: 'bg-[#9C531F] text-[#ffffff]',
  },
  flying: {
    light: 'bg-[#C6B7F5] text-[#ffffff]',
    default: 'bg-[#A890F0] text-[#ffffff]',
    dark: 'bg-[#6D5E9C] text-[#ffffff]',
  },
  ghost: {
    light: 'bg-[#A292BC] text-[#ffffff]',
    default: 'bg-[#705898] text-[#ffffff]',
    dark: 'bg-[#493963] text-[#ffffff]',
  },
  grass: {
    light: 'bg-[#A7DB8D] text-[#ffffff]',
    default: 'bg-[#78C850] text-[#ffffff]',
    dark: 'bg-[#4E8234] text-[#ffffff]',
  },
  ground: {
    light: 'bg-[#EBD69D] text-[#ffffff]',
    default: 'bg-[#E0C068] text-[#ffffff]',
    dark: 'bg-[#927D44] text-[#ffffff]',
  },
  ice: {
    light: 'bg-[#BCE6E6] text-[#ffffff]',
    default: 'bg-[#98D8D8] text-[#ffffff]',
    dark: 'bg-[#638D8D] text-[#ffffff]',
  },
  normal: {
    light: 'bg-[#C6C6A7] text-[#ffffff]',
    default: 'bg-[#A8A878] text-[#ffffff]',
    dark: 'bg-[#6D6D4E] text-[#ffffff]',
  },
  poison: {
    light: 'bg-[#C183C1] text-[#ffffff]',
    default: 'bg-[#A040A0] text-[#ffffff]',
    dark: 'bg-[#682A68] text-[#ffffff]',
  },
  psychic: {
    light: 'bg-[#FA92B2] text-[#ffffff]',
    default: 'bg-[#F85888] text-[#ffffff]',
    dark: 'bg-[#A13959] text-[#ffffff]',
  },
  rock: {
    light: 'bg-[#D1C17D] text-[#ffffff]',
    default: 'bg-[#B8A038] text-[#ffffff]',
    dark: 'bg-[#786824] text-[#ffffff]',
  },
  steel: {
    light: 'bg-[#D1D1E0] text-[#ffffff]',
    default: 'bg-[#B8B8D0] text-[#ffffff]',
    dark: 'bg-[#787887] text-[#ffffff]',
  },
  water: {
    light: 'bg-[#9DB7F5] text-[#ffffff]',
    default: 'bg-[#6890F0] text-[#ffffff]',
    dark: 'bg-[#445E9C] text-[#ffffff]',
  },
};
