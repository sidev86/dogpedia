import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "1rem", background: "#f8f8f8" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/breeds" style={{ marginRight: "1rem" }}>
            Breeds
          </Link>
          <Link to="/quiz">Quiz</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
