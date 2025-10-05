import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import QuizGame from "./pages/QuizGame";
import About from "./pages/About";
import logo from "./assets/dog_logo.png";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6">
            {/* h-16 fissa l'altezza; flex + items-center centra verticalmente */}
            <div className="h-16 flex items-center justify-between">
              {/* logo a sinistra */}
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Dogpedia logo"
                  className="w-10 h-10 object-contain" // evita rimbalzi di dimensioni
                />
                {/* uso span + leading-none per evitare margini/line-height indesiderati */}
                <span className="font-bold text-xl leading-none">DOGPEDIA</span>
              </Link>

              {/* menu a destra */}
              <div className="flex items-center gap-6">
                <Link
                  to="/breeds"
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Breeds
                </Link>
                <Link
                  to="/quizgame"
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  Game
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Pagina */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/quizgame" element={<QuizGame />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
