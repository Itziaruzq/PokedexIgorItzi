export const api = {
  pokemons: async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
    );
    return await response.json();
  },

  characteristics: async () => {
    const response = await fetch(
      " https://pokeapi.co/api/v2/characteristic?limit=50&offset=0"
    );
    return await response.json();
  },
};
