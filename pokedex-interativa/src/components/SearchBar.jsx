export function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex justify-center items-center gap-3 my-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite o nome ou ID do Pokémon"
        className="border border-gray-400 rounded-lg px-4 py-2 w-64
                   focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onClick={onSearch}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
      >
        Buscar
      </button>
    </div>
  );
}
