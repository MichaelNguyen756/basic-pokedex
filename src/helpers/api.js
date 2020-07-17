const PokemonAPIURL = 'https://pokeapi.co/api/v2';

export function getURL() {
    return `${PokemonAPIURL}/pokemon?limit=151`;
}

export async function GetPokemonJSONFromAPI(url) {
    const parsedUrl = url || getURL();
    const response = await fetch(parsedUrl);
    return response.json();
}
