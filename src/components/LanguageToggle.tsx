import { useLanguage } from "../components/LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 right-4 bg-[#004f3b] text-white px-3 py-1 rounded-full text-sm shadow-md hover:bg-[#00614a] transition"
    >
      {language === "it" ? "🇬🇧 English" : "🇮🇹 Italiano"}
    </button>
  );
}

export default LanguageToggle;
