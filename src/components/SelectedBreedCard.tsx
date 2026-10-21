import { breedTranslations } from "../utils/breedTranslations";
import { temperamentTranslations } from "../utils/temperamentTranslations";
import { useLanguage } from "../hooks/useLanguage";
import type { Breed } from "./BreedCard";

type SelectedBreedCardProps = {
  breed: Breed;
  onClose: () => void;
};

function SelectedBreedCard({ breed, onClose }: SelectedBreedCardProps) {
  const { language, t } = useLanguage();
  const translatedName =
    language === "it" ? breedTranslations[breed.name] || breed.name : breed.name;
  const temperament = breed.temperament
    ? breed.temperament
        .split(", ")
        .map((value) => {
          const capitalized = value.charAt(0).toUpperCase() + value.slice(1).trim();
          return language === "it"
            ? temperamentTranslations[capitalized] || value
            : value;
        })
        .join(", ")
    : "N/A";

  return (
    <div className="fixed inset-0 bg-[#004f3b] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
        >
          ✕
        </button>
        {breed.image?.url && (
          <img
            src={breed.image.url}
            alt={breed.name}
            className="w-full h-56 object-contain rounded-lg mb-4"
          />
        )}
        <h2 className="text-2xl font-bold text-[#004f3b] mb-2">
          {translatedName}
        </h2>
        <p className="text-gray-700 mb-1">
          <strong>{t("temperament")}:</strong> {temperament}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>{t("life_span")}:</strong>{" "}
          {breed.life_span
            ? language === "it"
              ? breed.life_span + " anni"
              : breed.life_span + " years"
            : "N/A"}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>{t("weight") + "(kg)"}:</strong>{" "}
          {language === "it"
            ? breed.weight?.metric
                .replace(/Male/g, "Maschio")
                .replace(/Female/g, "Femmina")
            : breed.weight?.metric}
        </p>
        <p className="text-gray-700">
          <strong>{t("height") + "(cm)"}:</strong>{" "}
          {language === "it"
            ? breed.height?.metric
                .replace(/Male/g, "Maschio")
                .replace(/Female/g, "Femmina")
            : breed.height?.metric}
        </p>
      </div>
    </div>
  );
}

export default SelectedBreedCard;
