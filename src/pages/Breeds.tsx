import { useEffect, useState } from "react";
import axios from "axios";

type Breed = {
  id: number;
  name: string;
  image?: { url: string };
};

function Breeds() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey =
      "live_7nKWx1IvPSl3A1eNse5G7flMI3Kyw9pz5II5ACTGcPetObxc2UJGq9juMUSILMTq";

    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: {
          "x-api-key": apiKey,
        },
      })
      .then((response) => {
        setBreeds(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🐾 Elenco razze</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {breeds.map((breed) => (
          <div
            key={breed.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "200px",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            {breed.image?.url && (
              <img
                src={breed.image.url}
                alt={breed.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            )}
            <h3>{breed.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breeds;
