import React, { useState } from "react";
import "./index.css";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { PokemonCard } from "./components/PokemonCard";
import { Loading } from "./components/Loading";

import { getPokemon } from "./api/pokeapi";

export default function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!search.trim()) {
      alert("Digite o nome ou ID do Pokémon!");
      return;
    }

    setPokemon(null);
    setLoading(true);

    try {
      const data = await getPokemon(search.toLowerCase());
      setPokemon(data);
    } catch {
      alert("Pokémon não encontrado 😢");
    }

    setLoading(false);
  }

  return (
    <div>
      <Header />
      <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />

      {loading && <Loading />}

      <div className="flex justify-center">
        {!loading && pokemon && <PokemonCard pokemon={pokemon} />}
      </div>
    </div>
  );
}
