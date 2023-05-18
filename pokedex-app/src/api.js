export const api = {
    pokemons: async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
        return response.json()
    },

    characteristics: async() => {
        const response = await fetch(' https://pokeapi.co/api/v2/characteristic?limit=30&offset=0');
        return response.json()
    }
}