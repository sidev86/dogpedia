import { useEffect, useState } from "react";
import axios from "axios";

type Breed = {
  id: number;
  name: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  weight?: { metric: string };
  height?: { metric: string };
  image?: { url: string };
};

function Home() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [filtered, setFiltered] = useState<Breed[]>([]);
  const [search, setSearch] = useState("");
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [loading, setLoading] = useState(false);

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
        console.error("Error fetching data :(", err);
        setLoading(false);
      });
  }, []);

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
    <div className="min-h-screen flex flex-col items-center text-center mt-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Welcome to <span className="text-emerald-900">Dogpedia</span>
      </h1>
      <p className="text-gray-600 mb-6">
        An archive of photos and informations about dog breeds.
      </p>

      {/* Input Search */}
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

      {/* Breeds cards */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            filtered.map(
              (breed) => (
                console.log(breed.name),
                (
                  <div
                    key={breed.id}
                    onClick={() => setSelectedBreed(breed)}
                    className="bg-white border-2 border-[#d8e8e5] rounded-xl shadow-xl hover:shadow-lg hover:-translate-y-2 transform transition-all duration-300 p-4 text-center cursor-pointer"
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
                    <h3 className="text-lg font-semibold text-emerald-900">
                      {breed.name}
                    </h3>
                  </div>
                )
              )
            )
          ) : (
            <p className="text-gray-500 text-lg col-span-full">
              No breeds found.
            </p>
          )}
        </div>
      )}

      {/*  Modal breed details */}
      {selectedBreed && (
        <div className="fixed inset-0 bg-emerald-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setSelectedBreed(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            {selectedBreed.image?.url && (
              <img
                src={selectedBreed.image.url}
                alt={selectedBreed.name}
                className="w-full h-56 object-contain rounded-lg mb-4"
              />
            )}
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">
              {selectedBreed.name}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>Temperament:</strong> {selectedBreed.temperament || "N/A"}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Origin:</strong> {selectedBreed.origin || "Unknown"}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Life span:</strong> {selectedBreed.life_span}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Weight:</strong> {selectedBreed.weight?.metric} kg
            </p>
            <p className="text-gray-700">
              <strong>Height:</strong> {selectedBreed.height?.metric} cm
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
