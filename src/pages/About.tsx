function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2 className="text-3xl font-bold text-[#004f3b] mb-6">
        About Dogpedia{" "}
      </h2>
      <p className="w-1/2 mx-auto mb-6">
        Dogpedia is a project developed for dog lovers, conceived as an
        interactive archive that collects information and images of various dog
        breeds. The goal is to offer a simple and enjoyable way to explore and
        learn more about dog breeds from around the world, with a modern and
        intuitive interface.
      </p>

      <p className="w-1/2 mx-auto mb-6">
        Ready for a challenge? Dive into the Dog Quiz Game and see how many
        breeds you can recognize! The faster you guess, the higher your score.
        Let the fun begin! 🐶🐾
      </p>

      <h2 className="text-2xl font-bold text-[#004f3b] mb-2">Tools Used</h2>
      <ul className="mb-6">
        <li>
          <span className="font-bold">React + Typescript:</span> Frontend and
          logical structure
        </li>
        <li>
          <span className="font-bold">Tailwind CSS:</span> Styling
        </li>
        <li>
          <span className="font-bold">Axios:</span> API requests
        </li>
        <li>
          <span className="font-bold">Vite:</span> Build tool
        </li>
      </ul>

      <p>
        <span className="font-bold">Created by:</span> Samir Ibrahim
      </p>
    </div>
  );
}

export default About;
