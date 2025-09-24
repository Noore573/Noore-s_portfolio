import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.card}>
        <h1>👋 Hello, I’m Noor!</h1>
        <p>Welcome to my portfolio website 🚀</p>
        <button style={styles.button}>Click Me</button>
      </header>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  button: {
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default App;
