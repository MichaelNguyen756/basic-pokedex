// This is to match the Pokemon API documentation
export type NamedAPIResource = {
  name: string;
  url: string;
};

export type NamedAPIResourceList = {
  count: number;
  next: string;
  previous: boolean;
  results: NamedAPIResource[];
};

export type PokemonSprites = {
  front_default: string;
};

export type VersionGameIndex = {
  game_index: number;
  version: VersionAPIResource;
};

export type PokemonHeldItemVersion = {
  rarity: number;
  version: VersionAPIResource;
};

export type PokemonHeldItem = {
  item: ItemAPIResource;
  version_details: PokemonHeldItemVersion;
};

export type PokemonMoveVersion = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethodAPIResource;
  version_group: VersionGroupAPIResource;
};

export type PokemonMove = {
  move: PokemonMoveAPIResource;
  version_group_details: PokemonMoveVersion[];
};

export type PokemonStat = {
  effort: number;
  base_stat: number;
  stat: PokemonStatAPIResource;
};

export type PokemonType = {
  slot: number;
  type: TypeAPIResource;
};

export type PokemonAbility = {
  ability: AbilityAPIResource;
  is_hidden: boolean;
  slot: number;
};

export type Pokemon = {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonFormAPIResource[];
  game_indices: VersionGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  species: PokemonSpeciesAPIResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};

export type MoveAttribute = {
  levelAt: number | undefined;
  moveName: string;
};

export type AbilityAPIResource = NamedAPIResource;
export type PokemonAPIResource = NamedAPIResource;
export type MoveLearnMethodAPIResource = NamedAPIResource;
export type PokemonFormAPIResource = NamedAPIResource;
export type PokemonMoveAPIResource = NamedAPIResource;
export type PokemonSpeciesAPIResource = NamedAPIResource;
export type PokemonStatAPIResource = NamedAPIResource;
export type TypeAPIResource = NamedAPIResource;
export type VersionAPIResource = NamedAPIResource;
export type VersionGroupAPIResource = NamedAPIResource;
export type ItemAPIResource = NamedAPIResource;
export type PokemonAPIResourceList = NamedAPIResourceList;
