import { useEffect, useState } from "react";
import axios from "axios";
import { translations } from "../utils/translations";
import { breedTranslations } from "../utils/breedTranslations";

type Breed = {
  id: number;
  name: string;
  image?: { url: string };
};

function QuizGame({ language }: { language: "en" | "it" }) {
  console.log("language: ", language);
  const t = translations[language];
  console.log(t);
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [currentBreed, setCurrentBreed] = useState<Breed | null>(null);
  const [options, setOptions] = useState<Breed[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(100);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const apiKey =
    "live_7nKWx1IvPSl3A1eNse5G7flMI3Kyw9pz5II5ACTGcPetObxc2UJGq9juMUSILMTq";

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: { "x-api-key": apiKey },
      })
      .then((res) => {
        const data = res.data.filter((b: Breed) => b.image?.url);
        setBreeds(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const startNewRound = () => {
    if (breeds.length < 4) return;

    setSelected(null);
    setTimer(100);

    const correct = breeds[Math.floor(Math.random() * breeds.length)];
    const wrong = breeds
      .filter((b) => b.id !== correct.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const allOptions = [...wrong, correct].sort(() => 0.5 - Math.random());
    setCurrentBreed(correct);
    setOptions(allOptions);
  };

  useEffect(() => {
    if (isGameOver || !currentBreed) return;
    if (timer <= 0) {
      setSelected(currentBreed?.name ?? null);
      setLives((l) => l - 1);
      if (lives - 1 <= 0) {
        setTimeout(() => setIsGameOver(true), 1000);
      } else {
        setTimeout(() => startNewRound(), 1000);
      }
      return;
    }

    const interval = setInterval(() => setTimer((t) => t - 1), 100);
    return () => clearInterval(interval);
  }, [timer, isGameOver, currentBreed]);

  const handleAnswer = (answer: string | null) => {
    if (!currentBreed || selected) return;

    setSelected(answer);
    const isCorrect = answer === currentBreed.name;

    if (isCorrect) {
      const points = Math.floor(timer * 2);
      setScore((s) => s + points);
    } else {
      setLives((l) => l - 1);
      if (lives - 1 <= 0) {
        setTimeout(() => setIsGameOver(true), 1000);
        return;
      }
    }

    setTimeout(() => startNewRound(), 1000);
  };

  const startGame = () => {
    setScore(0);
    setLives(3);
    setIsGameOver(false);
    startNewRound();
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {!isPlaying && (
        <h1 className="text-3xl font-bold text-[#004f3b] mb-6">
          {t.gameTitle}
        </h1>
      )}

      {!currentBreed && !isGameOver && (
        <button
          onClick={startGame}
          className="bg-[#004f3b] text-white px-6 py-2 rounded-lg hover:bg-[#065f46] transition"
        >
          {t.startGame}
        </button>
      )}

      {isGameOver && (
        <div className="bg-white border-2 border-[#d8e8e5] p-10 rounded-xl shadow-xl inline-block">
          <h2 className="text-2xl font-bold text-[#004f3b] mb-2">
            {t.gameOver}
          </h2>
          <p className="text-gray-700 text-lg font-bold mb-4">
            {t.yourScore} {score}
          </p>
          <button
            onClick={startGame}
            className="bg-[#004f3b] text-white px-6 py-2 rounded-lg hover:bg-[#065f46] transition"
          >
            {t.tryAgain}
          </button>
        </div>
      )}

      {!isGameOver && currentBreed && (
        <div className="max-w-md mx-auto bg-white border-2 border-[#d8e8e5] rounded-xl shadow-lg p-6">
          <div className="flex justify-between mb-4 text-xl">
            <p className="text-gray-700 font-semibold">
              {Array(lives).fill("❤️").join(" ")}
            </p>
            <p className="text-gray-700 font-semibold">
              {t.score}: {score}
            </p>
          </div>

          {/* Timer bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <div
              className="h-3 bg-[#004f3b] transition-all duration-100"
              style={{ width: `${timer}%` }}
            ></div>
          </div>

          <img
            src={currentBreed.image?.url}
            alt="Dog"
            className="w-full h-64 object-contain rounded-lg mb-6 bg-gray-100"
          />

          <div className="grid grid-cols-2 gap-4">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleAnswer(opt.name)}
                className={`px-4 py-2 rounded-lg border bg-[#004f3b] text-white transition
      ${
        selected
          ? opt.name === currentBreed.name
            ? "bg-[#22c55e]"
            : opt.name === selected
            ? "bg-[#f56565]"
            : "bg-[#004f3b]"
          : "hover:bg-[#047857]"
      }`}
              >
                {language === "it" && breedTranslations[opt.name]
                  ? breedTranslations[opt.name]
                  : opt.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizGame;
