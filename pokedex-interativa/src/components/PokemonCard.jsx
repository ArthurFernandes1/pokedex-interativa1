import React from "react";

export function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div style={styles.card}>
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        style={styles.image}
      />
      <h3 style={styles.name}>{pokemon.name.toUpperCase()}</h3>
      <p style={styles.type}>
        Tipo: {pokemon.types?.map((t) => t.type.name).join(", ")}
      </p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "180px",
  },
  image: {
    width: "120px",
    height: "120px",
  },
  name: {
    margin: "8px 0 4px",
    fontSize: "1.2rem",
  },
  type: {
    margin: 0,
    color: "#555",
  },
};
