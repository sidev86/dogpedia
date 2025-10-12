import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../utils/translations";
import logo from "../assets/dog_logo_white.png";

function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#004f3b] text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-1">
          <img src={logo} alt="Dogpedia logo" className="w-10 h-10 mr-0" />
          <span className="text-white logo-text font-bold text-xl">
            DOGPEDIA
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:underline">
            {t.navHome}
          </Link>
          <Link to="/quizgame" className="hover:underline">
            {t.navGame}
          </Link>
          <Link to="/about" className="hover:underline">
            {t.navAbout}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
