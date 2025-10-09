function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2 className="text-3xl font-bold text-emerald-900 mb-6">
        About Dogpedia{" "}
      </h2>
      <p className="w-1/2 mx-auto mb-6">
        Dogpedia is a project developed for dog lovers, conceived as an
        interactive archive that collects information and images of various dog
        breeds. The goal is to offer a simple and enjoyable way to explore and
        learn more about dog breeds from around the world, with a modern and
        intuitive interface.
      </p>

      <h2 className="text-2xl font-bold text-emerald-900 mb-2">Tools Used</h2>
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
      <p className="w-1/2 mx-auto mb-6">
        And if you wanna test your knowledge of dog breeds and have fun... try
        the dog quiz game! Find out how much you know with our dog quiz in the
        dedicated section! 🐶🐾
      </p>
      <p>
        <span className="font-bold">Created by:</span> Samir Ibrahim
      </p>
    </div>
  );
}

export default About;
