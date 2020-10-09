// This is to match the Pokemon API documentation
export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface NamedAPIResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: NamedAPIResource[];
}

export interface PokemonSprites {
  front_default: string;
}

export interface VersionGameIndex {
  game_index: number;
  version: VersionAPIResource;
}

export interface PokemonHeldItemVersion {
  rarity: number;
  version: VersionAPIResource;
}

export interface PokemonHeldItem {
  item: ItemAPIResource;
  version_details: PokemonHeldItemVersion;
}

export interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: MoveLearnMethodAPIResource;
  version_group: VersionGroupAPIResource;
}

export interface PokemonMove {
  move: PokemonMoveAPIResource;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonStat {
  effort: number;
  base_stat: number;
  stat: PokemonStatAPIResource;
}

export interface PokemonType {
  slot: number;
  type: TypeAPIResource;
}

export interface PokemonAbility {
  ability: AbilityAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
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
}

export interface MoveAttribute {
  levelAt: number | undefined;
  moveName: string;
}

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
