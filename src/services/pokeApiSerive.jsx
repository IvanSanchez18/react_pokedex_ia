const BASE_URL = "https://pokeapi.co/api/v2/";

async function getPokemons(take = 151) {
    const url = `${BASE_URL}pokemon?limit=${take}`;
    const response = await fetch(url);
    const data = await response.json();

    const pokemonsWithDetails = await Promise.all(
        data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            const details = await detailsResponse.json();

            const hpStat = details.stats.find(stat => stat.stat.name === "hp");

            return {
                name: details.name,
                image: details.sprites.front_default,
                hp: hpStat ? hpStat.base_stat : null,
                order: details.order,
                abilities: details.abilities.map(a => a.ability.name),
                types: details.types.map(t => t.type.name)
            };
        })
    );

    return pokemonsWithDetails;
}

function getPokemonDetails(url) {
    return fetch(url).then(response => response.json());
}

export { getPokemons, getPokemonDetails };