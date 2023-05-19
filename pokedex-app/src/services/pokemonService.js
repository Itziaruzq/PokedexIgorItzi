import { api } from "../api";

const getPokemons = async () => {
  /*Obtener listado pokemons*/
  const pokemons = await api.pokemons();
  const pokemonsUrls = pokemons.results.map((url) => url.url);

  const pokemonsData = await Promise.all(
    pokemonsUrls.map(async (data) => {
      const res = await fetch(data);
      return await res.json();
    })
  );

  /*Obtener descripciones*/
  const descriptionJSON = await api.characteristics();
  const pokemonFeaturesJSON = descriptionJSON.results.map(
    (description) => description.url
  );

  const pokemonDescriptionJSON = await Promise.all(
    pokemonFeaturesJSON.map(async (description) => {
      const res = await fetch(description);
      return res.json();
    })
  );

  const pokemonDescriptionJSONSpanish = await pokemonDescriptionJSON.map(
    (data) => data.descriptions[5].description
  );

  /*Mapear pokemons*/

  console.log(
    pokemonsData.map((pokemonData, index) => {
      return {
        name: pokemonData.name,
        id: pokemonData.id,
        weight: pokemonData.weight,
        height: pokemonData.height,
        types: pokemonData.types,
        description: pokemonDescriptionJSONSpanish[index],
        src: pokemonData.sprites.front_default,
      };
    })
  );

  const mappedPokemons = pokemonsData.map((pokemonData, index) => {
    return {
      name: pokemonData.name,
      id: pokemonData.id,
      weight: pokemonData.weight,
      height: pokemonData.height,
      types: pokemonData.types,
      description: pokemonDescriptionJSONSpanish[index],
      src: pokemonData.sprites.front_default,
    };
  });
  return mappedPokemons;
};

export const pokemonService = {
  getPokemons,
};
