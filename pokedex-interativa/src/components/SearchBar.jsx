import React from "react";

export function SearchBar({ value, onChange, onSearch }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Busque um Pokémon pelo nome ou ID..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
      <button onClick={onSearch} style={styles.button}>
        Buscar
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    margin: "16px 0",
  },
  input: {
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "250px",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#ef5350",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};
