import { useEffect, useState } from "react";
import axios from "axios";
import { breedTranslations } from "../utils/breedTranslations";
import { useLanguage } from "../hooks/useLanguage";
import LanguageToggle from "../components/LanguageToggle";

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
  const { language, t } = useLanguage();

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
      const results = breeds.filter((b) => {
        const translatedName =
          language === "it" ? breedTranslations[b.name] || b.name : b.name;
        return translatedName.toLowerCase().includes(search.toLowerCase());
      });
      setFiltered(results);
    }
  }, [search, breeds, language]);

  return (
    <div className="min-h-screen flex flex-col items-center text-center mt-12 px-4">
      <LanguageToggle />

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        {t("welcome")} <span className="text-[#004f3b]">Dogpedia</span>
      </h1>
      <p className="text-gray-600 mb-6">{t("description")}</p>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder={t("search_placeholder")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-72 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004f3b] focus:border-transparent"
        />
      </div>

      {loading && <p className="text-gray-500 text-lg mt-4">{t("loading")}</p>}

      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            filtered.map((breed) => {
              const translatedName =
                language === "it"
                  ? breedTranslations[breed.name] || breed.name
                  : breed.name;

              return (
                <div
                  key={breed.id}
                  onClick={() => setSelectedBreed(breed)}
                  className="bg-white border-2 border-[#d8e8e5] rounded-xl shadow-xl hover:shadow-lg hover:-translate-y-2 transform transition-all duration-300 p-4 text-center cursor-pointer"
                >
                  {breed.image?.url ? (
                    <img
                      src={breed.image.url}
                      alt={translatedName}
                      className="w-full h-48 object-contain bg-gray-100 rounded-lg mb-3"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-3 flex items-center justify-center text-gray-500">
                      {t("no_image")}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-[#004f3b]">
                    {translatedName}
                  </h3>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500 text-lg col-span-full">
              {t("no_breeds")}
            </p>
          )}
        </div>
      )}

      {selectedBreed && (
        <div className="fixed inset-0 bg-[#004f3b] bg-opacity-50 flex items-center justify-center z-50">
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
            <h2 className="text-2xl font-bold text-[#004f3b] mb-2">
              {language === "it"
                ? breedTranslations[selectedBreed.name] || selectedBreed.name
                : selectedBreed.name}
            </h2>
            <p className="text-gray-700 mb-1">
              <strong>{t("temperament")}:</strong>{" "}
              {selectedBreed.temperament || "N/A"}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>{t("origin")}:</strong>{" "}
              {selectedBreed.origin || t("unknown")}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>{t("life_span")}:</strong> {selectedBreed.life_span}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>{t("weight")}:</strong> {selectedBreed.weight?.metric} kg
            </p>
            <p className="text-gray-700">
              <strong>{t("height")}:</strong> {selectedBreed.height?.metric} cm
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
