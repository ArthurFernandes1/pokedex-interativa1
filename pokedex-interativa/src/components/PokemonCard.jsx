import { typeColors } from "../utils/typeColors";

export function PokemonCard({ pokemon }) {
  const mainType = pokemon.types[0].type.name;
  const bgColor = typeColors[mainType] || "#777";

  return (
    <div
      className="shadow-lg rounded-2xl p-6 w-80 text-white"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-3xl font-bold text-center capitalize mb-4 drop-shadow-lg">
        {pokemon.name}
      </h2>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="mx-auto w-40 h-40 drop-shadow-xl"
      />

      <div className="mt-4 text-lg">
        <p><strong>ID:</strong> {pokemon.id}</p>
        <p>
          <strong>Tipo(s):</strong>  
          {pokemon.types.map(t => t.type.name).join(", ")}
        </p>
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
      </div>
    </div>
  );
}
