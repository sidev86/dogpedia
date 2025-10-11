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

  if (loading)
    return <p className="text-center text-gray-600 text-lg mt-8">Loading...</p>;

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🐾 Breeds List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {breeds.map((breed) => (
          <div
            key={breed.id}
            className="bg-[#004f3b] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 text-center"
          >
            {breed.image?.url ? (
              <img
                src={breed.image.url}
                alt={breed.name}
                className="w-full h-48 object-contain rounded-lg mb-3 bg-[#004f3b]"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-gray-500">
                No image
              </div>
            )}
            <h3 className="text-lg font-semibold text-yellow-50">
              {breed.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breeds;
