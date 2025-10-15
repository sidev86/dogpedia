import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizGame from "./pages/QuizGame";
import About from "./pages/About";
import { useLanguage } from "./hooks/useLanguage";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { language } = useLanguage();
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Pages Routing */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/quizgame"
              element={<QuizGame language={language} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
