import { useLanguage } from "../hooks/useLanguage";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <button
      onClick={toggleLang}
      className="bg-white text-[#004f3b] font-semibold px-3 py-1 mt-8 rounded-full text-sm shadow-md hover:bg-[#f0f0f0] transition"
    >
      {language === "it" ? "🇬🇧 English" : "🇮🇹 Italiano"}
    </button>
  );
}

export default LanguageToggle;
