import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemon } from "../api/pokeapi";

export default function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getPokemon(id);
        setPokemon(data);
      } catch {
        setPokemon(null);
      }
    }
    load();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="text-center text-xl mt-20">
        Carregando Pokémon...
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">

      {/* Botão voltar */}
      <Link
        to="/"
        className="inline-block mb-4 text-red-600 font-bold hover:underline"
      >
        ⬅ Voltar
      </Link>

      <div className="bg-white shadow-xl rounded-xl p-6 border">

        <h1 className="text-3xl font-bold capitalize text-center mb-4">
          {pokemon.name} #{pokemon.id}
        </h1>

        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-64 mx-auto mb-6"
        />

        <div className="text-center mb-4">
          <span className="font-bold">Tipos: </span>
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="px-3 py-1 mx-1 rounded-full text-white capitalize"
              style={{ backgroundColor: getTypeColor(t.type.name) }}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="flex justify-around text-lg">
          <p><b>Altura:</b> {pokemon.height / 10} m</p>
          <p><b>Peso:</b> {pokemon.weight / 10} kg</p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Status Base</h2>

        <ul>
          {pokemon.stats.map((s) => (
            <li key={s.stat.name} className="capitalize">
              <b>{s.stat.name}:</b> {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function getTypeColor(type) {
  const colors = {
    grass: "#48D0B0",
    fire: "#FB6C6C",
    water: "#76BEFE",
    bug: "#A8B820",
    normal: "#A8A77A",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C22E28",
    psychic: "#F95587",
    rock: "#B6A136",
    ghost: "#735797",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    flying: "#A98FF3",
  };

  return colors[type] || "#666";
}
