import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Welcome to Dogpedia</h1>
      <p>An archive of photos and information about dog breeds.</p>
      <input
        type="text"
        placeholder="Cerca una razza..."
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      />
      <Link to="/breeds">
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          Esplora le razze
        </button>
      </Link>
    </div>
  );
}

export default Home;
