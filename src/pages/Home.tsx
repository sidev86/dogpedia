import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Welcome to <span className="text-emerald-900">Dogpedia</span>
      </h1>
      <p className="text-gray-600 mb-6">
        An archive of photos and information about dog breeds.
      </p>

      {/* Input di ricerca */}
      <div>
        <input
          type="text"
          placeholder="Search breeds..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 mr-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-green-600 focus:border-transparent mb-4"
        />

        {/* Bottone con Link */}

        <Link to="/breeds">
          <button className="bg-emerald-900 text-white px-5 py-2 rounded-lg text-lg hover:bg-emerald-700 transition-colors">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
