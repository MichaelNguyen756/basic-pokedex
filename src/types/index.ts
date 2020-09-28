export interface colourTypes {
    default: string;
    light: string;
    dark: string;
}

export interface pokemonTypeColours {
    [pokemonType: string]: colourTypes;
}
