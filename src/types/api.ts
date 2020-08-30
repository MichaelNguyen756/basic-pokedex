// This is to match the Pokemon API documentation

export interface PokemonNamedAPIResource {
    name: string;
    url: string;
}

export interface PokemonNamedAPIResourceList {
    count: number;
    next: string;
    previous: boolean;
    results: PokemonNamedAPIResource[];
}
