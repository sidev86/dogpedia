import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>🐶 Welcome to Dogpedia</h1>
      <p>
        L’enciclopedia interattiva delle razze canine: cerca, esplora e gioca
        con i quiz.
      </p>
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
