import { breedTranslations } from "../utils/breedTranslations";
import { useLanguage } from "../hooks/useLanguage";

export type Breed = {
  id: number;
  name: string;
  temperament?: string;
  origin?: string;
  life_span?: string;
  weight?: { metric: string };
  height?: { metric: string };
  image?: { url: string };
};

type BreedCardProps = {
  breed: Breed;
  onSelect: (breed: Breed) => void;
};

function BreedCard({ breed, onSelect }: BreedCardProps) {
  const { language, t } = useLanguage();
  const translatedName =
    language === "it" ? breedTranslations[breed.name] || breed.name : breed.name;

  return (
    <div
      onClick={() => onSelect(breed)}
      className="bg-white border-2 border-[#c8cccb] rounded-xl shadow-xl hover:shadow-lg hover:-translate-y-2 transform transition-all duration-300 p-4 text-center cursor-pointer"
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
      <h3 className="text-lg font-semibold text-[#004f3b]">{translatedName}</h3>
    </div>
  );
}

export default BreedCard;
