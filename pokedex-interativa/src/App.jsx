import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { PokemonCard } from "./components/PokemonCard";
import { getPokemon } from "./api/pokeapi";

export default function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getPokemon(search.toLowerCase());
      setPokemon(data);
    } catch {
      setPokemon(null);
      alert("Pokémon não encontrado 😢");
    }
  };

  return (
    <div>
      <Header />

      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={handleSearch}
      />

      {pokemon && (
        <div className="flex justify-center mt-6">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}
