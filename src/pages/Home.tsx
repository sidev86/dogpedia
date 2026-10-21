import { useEffect, useState } from "react";
import axios from "axios";
import { breedTranslations } from "../utils/breedTranslations";
import { useLanguage } from "../hooks/useLanguage";
import LanguageToggle from "../components/LanguageToggle";
import BreedCard, { type Breed } from "../components/BreedCard";
import SelectedBreedCard from "../components/SelectedBreedCard";

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
            filtered.map((breed) => (
              <BreedCard
                key={breed.id}
                breed={breed}
                onSelect={setSelectedBreed}
              />
            ))
          ) : (
            <p className="text-gray-500 text-lg col-span-full">
              {t("no_breeds")}
            </p>
          )}
        </div>
      )}

      {selectedBreed && (
        <SelectedBreedCard
          breed={selectedBreed}
          onClose={() => setSelectedBreed(null)}
        />
      )}
    </div>
  );
}

export default Home;
