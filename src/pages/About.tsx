import { useLanguage } from "../hooks/useLanguage";
import { aboutTranslations } from "../utils/aboutTranslations";

function About() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto text-center justify-center mt-16">
      <h2 className="text-3xl font-bold text-[#004f3b] mb-6">{t.title}</h2>

      <p className="mb-6">{t.description1}</p>

      <p className="mb-6">{t.description2}</p>

      <h2 className="text-2xl font-bold text-[#004f3b] mb-2">{t.toolsTitle}</h2>
      <ul className="mb-6 space-y-2">
        <li>
          <span className="font-bold">React + Typescript:</span> {t.tools.react}
        </li>
        <li>
          <span className="font-bold">Tailwind CSS:</span> {t.tools.tailwind}
        </li>
        <li>
          <span className="font-bold">Axios:</span> {t.tools.axios}
        </li>
        <li>
          <span className="font-bold">Vite:</span> {t.tools.vite}
        </li>
      </ul>

      <p>
        <span className="font-bold">{t.createdBy}</span> Samir Ibrahim
      </p>
    </div>
  );
}

export default About;
