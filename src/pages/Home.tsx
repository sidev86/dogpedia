import { useEffect, useState } from "react";
import axios from "axios";

type Breed = {
  id: number;
  name: string;
  image?: { url: string };
};

function Home() {
  const [search, setSearch] = useState("");
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [filtered, setFiltered] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Carica tutte le razze all'avvio (puoi limitarne il numero se vuoi)
  useEffect(() => {
    const apiKey =
      "live_7nKWx1IvPSl3A1eNse5G7flMI3Kyw9pz5II5ACTGcPetObxc2UJGq9juMUSILMTq";
    setLoading(true);

    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: { "x-api-key": apiKey },
      })
      .then((res) => {
        setBreeds(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore nel caricamento delle razze:", err);
        setLoading(false);
      });
  }, []);

  // 🔹 Aggiorna i risultati filtrati in base al testo scritto
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(breeds);
    } else {
      const results = breeds.filter((b) =>
        b.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(results);
    }
  }, [search, breeds]);

  return (
    <div className="text-center mt-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Welcome to <span className="text-emerald-900">Dogpedia</span>
      </h1>
      <p className="text-gray-600 mb-6">
        An archive of photos and information about dog breeds.
      </p>

      {/* Input di ricerca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search breeds..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-72 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent"
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-gray-500 text-lg mt-4">Loading breeds...</p>
      )}

      {/* Risultati */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            filtered.map((breed) => (
              <div
                key={breed.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center"
              >
                {breed.image?.url ? (
                  <img
                    src={breed.image.url}
                    alt={breed.name}
                    className="w-full h-48 object-contain bg-gray-100 rounded-lg mb-3"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-gray-500">
                    No image
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-800">
                  {breed.name}
                </h3>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg col-span-full">
              No breeds found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
