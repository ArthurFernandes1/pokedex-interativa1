import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- ADICIONADO
import { getAllPokemon } from "../api/pokeapi";
import { PokemonCard } from "../components/PokemonCard";

export default function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getAllPokemon(30); // carrega primeiros 30 pokémon
      setPokemonList(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">

      {/* BOTÃO VOLTAR */}
      <Link
        to="/"
        className="fixed top-4 left-4 bg-red-600 text-white px-3 py-2 rounded-lg shadow hover:bg-red-700"
      >
        ⬅ Voltar para o Início
      </Link>

      <h1 className="text-4xl font-bold text-center mb-6 text-red-600">
        Pokédex Completa
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((p) => (
          <PokemonCard pokemon={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
