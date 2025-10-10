import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import QuizGame from "./pages/QuizGame";
import About from "./pages/About";
import logo from "./assets/dog_logo.png";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="shadow-sm">
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-1">
                <img
                  src={logo}
                  alt="Dogpedia logo"
                  className="w-10 h-10 mr-0 filter invert"
                />
                <span className="text-white logo-text font-bold text-xl">
                  DOGPEDIA
                </span>
              </div>

              {/* Menu */}
              <div className="flex items-center gap-6">
                <Link
                  to="/"
                  className="text-white  hover:text-emerald-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/quizgame"
                  className="text-white  hover:text-emerald-600 transition-colors"
                >
                  Game
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-emerald-600 transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Pages Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizgame" element={<QuizGame />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
