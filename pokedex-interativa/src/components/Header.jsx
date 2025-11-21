import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">

      {/* Título principal */}
      <h1 className="text-5xl pokemon-title">
        Pokédex Interativa
      </h1>

      {/* Menu */}
      <nav>
        <Link
          to="/pokedex"
          className="pokemon-title text-3xl hover:brightness-110 transition"
        >
          Pokédex
        </Link>
      </nav>

    </header>
  );
}
