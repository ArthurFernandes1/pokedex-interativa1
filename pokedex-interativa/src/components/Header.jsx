import React from "react";

export function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>PokéDex Interativa 🔥</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#ef5350",
    color: "white",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
  },
};
