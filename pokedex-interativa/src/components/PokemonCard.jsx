import { Link } from "react-router-dom";

export function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="block w-full max-w-xs mx-auto"
    >
      <div className="bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition cursor-pointer border">
        <h3 className="text-xl font-bold text-center capitalize">
          {pokemon.name}
        </h3>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 mx-auto"
        />
      </div>
    </Link>
  );
}
