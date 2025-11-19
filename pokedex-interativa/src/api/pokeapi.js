import axios from "axios";

const API_BASE = "https://pokeapi.co/api/v2";

export const api = axios.create({
  baseURL: API_BASE,
});

// Lista de Pokémon (com limite e paginação)
export async function getPokemonList(limit = 20, offset = 0) {
  const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
}

// Detalhes de um Pokémon específico
export async function getPokemon(nameOrId) {
  const response = await api.get(`/pokemon/${nameOrId}`);
  return response.data;
}

export async function getAllPokemon(limit = 20) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );

  const results = response.data.results;

  // busca os detalhes de cada Pokémon
  const detailedPokemon = await Promise.all(
    results.map(async (pokemon) => {
      const res = await axios.get(pokemon.url);
      return res.data;
    })
  );

  return detailedPokemon;
}
