// This is to match the Pokemon API documentation
export interface INamedAPIResource {
    name: string;
    url: string;
}

export interface INamedAPIResourceList {
    count: number;
    next: string;
    previous: boolean;
    results: INamedAPIResource[];
}

export interface IPokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface IVersionGameIndex {
    game_index: number;
    version: VersionAPIResource;
}

export interface IPokemonHeldItemVersion {
    rarity: number;
    version: VersionAPIResource;
}

export interface IPokemonHeldItem {
    item: ItemAPIResource;
    version_details: IPokemonHeldItemVersion;
}

export interface IPokemonMoveVersion {
    level_learned_at: number;
    move_learn_method: MoveLearnMethodAPIResource;
    version_group: VersionGroupAPIResource;
}

export interface IPokemonMove {
    move: PokemonMoveAPIResource;
    version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonStat {
    effort: number;
    base_stat: number;
    stat: PokemonStatAPIResource;
}

export interface IPokemonType {
    slot: number;
    type: TypeAPIResource;
}

export interface IPokemonAbility {
    ability: AbilityAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface IPokemon {
    abilities: IPokemonAbility[];
    base_experience: number;
    forms: PokemonFormAPIResource[];
    game_indices: IVersionGameIndex[];
    height: number;
    held_items: IPokemonHeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IPokemonMove[];
    name: string;
    order: number;
    species: PokemonSpeciesAPIResource;
    sprites: IPokemonSprites;
    stats: IPokemonStat[];
    types: IPokemonType[];
    weight: number;
}

export interface IMoveAttribute {
    levelAt: number | undefined;
    moveName: string;
}

export type AbilityAPIResource = INamedAPIResource;
export type PokemonAPIResource = INamedAPIResource;
export type MoveLearnMethodAPIResource = INamedAPIResource;
export type PokemonFormAPIResource = INamedAPIResource;
export type PokemonMoveAPIResource = INamedAPIResource;
export type PokemonSpeciesAPIResource = INamedAPIResource;
export type PokemonStatAPIResource = INamedAPIResource;
export type TypeAPIResource = INamedAPIResource;
export type VersionAPIResource = INamedAPIResource;
export type VersionGroupAPIResource = INamedAPIResource;
export type ItemAPIResource = INamedAPIResource;
export type PokemonAPIResourceList = INamedAPIResourceList;
