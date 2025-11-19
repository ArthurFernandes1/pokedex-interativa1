import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-red-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Pokédex Interativa</h1>

      <nav className="flex gap-4">
        <Link to="/pokedex">Pokédex</Link>
      </nav>
    </header>
  );
}
