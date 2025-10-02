import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import QuizGame from "./pages/QuizGame";
import About from "./pages/About";
import logo from "./assets/dog_logo.png";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "1rem", background: "#f8f8f8" }}>
          <div className="navbar">
            <Link className="nav-link" to="/">
              <div className="logo-div">
                <img className="logo-img" src={logo} width="50px" alt="logo" />
                <p className="logo-text">DOGPEDIA</p>
              </div>
            </Link>
            <div className="nav-elements">
              <Link
                className="nav-link"
                to="/breeds"
                style={{ marginRight: "2rem" }}
              >
                Breeds
              </Link>
              <Link className="nav-link" to="/quizgame">
                Game
              </Link>
              <Link
                className="nav-link"
                to="/about"
                style={{ marginRight: "2rem" }}
              >
                About
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/quizgame" element={<QuizGame />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
