import { Link } from "react-router-dom";

export function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      className="pokemon-card-3d
        bg-white rounded-xl shadow-lg border
        p-4 text-center transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl hover:-rotate-1
      "
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)",
      }}
    >
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="w-28 mx-auto mb-4 drop-shadow-lg transition-all duration-300 hover:scale-110"
      />

      <h2 className="capitalize text-xl font-bold text-gray-800">
        {pokemon.name}
      </h2>

      <p className="text-gray-500 text-sm">#{pokemon.id}</p>
    </Link>
  );
}

