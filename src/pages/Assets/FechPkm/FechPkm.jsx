import axios from "axios";

export async function getPokemonsGen(gen) {
  let pokemons = [];
  let endpoint = `https://pokeapi.co/api/v2/generation/${gen}/`;

  const promises = await axios
    .get(endpoint)
    .then((res) => res.data.pokemon_species)
    .catch((error) => {
      console.error(`Error fetching ${endpoint}: ${error}`);
      return [];
    });

  const results = await Promise.all(
    promises.map(async (pokemon) => {
      try {
        const res = await axios.get(pokemon.url);
        return res.data;
      } catch (error) {
        console.error(`Error fetching ${pokemon.url}: ${error}`);
        return null;
      }
    })
  );

  results.forEach((pokemon) => {
    if (pokemon) {
      pokemons.push(pokemon);
    }
  });

  //console.log(pokemons);

  pokemons.sort((a, b) => a.order - b.order);

  return pokemons;
}

export async function getPkm(pkmList) {
  const promises = pkmList.map(async ({ id }) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    return data;
  });

  return Promise.all(promises);
}
