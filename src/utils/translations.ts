export type Language = "en" | "it";

export const translations: Record<Language, Record<string, string>> = {
  en: {
    welcome: "Welcome to",
    description: "An archive of photos and informations about dog breeds.",
    search_placeholder: "Search breeds...",
    loading: "Loading breeds...",
    no_breeds: "No breeds found.",
    temperament: "Temperament",
    origin: "Origin",
    life_span: "Life span",
    weight: "Weight",
    height: "Height",
    unknown: "Unknown",
    no_image: "No image",
  },
  it: {
    welcome: "Benvenuto su",
    description: "Un archivio di foto e informazioni sulle razze canine.",
    search_placeholder: "Cerca una razza...",
    loading: "Caricamento razze...",
    no_breeds: "Nessuna razza trovata.",
    temperament: "Temperamento",
    origin: "Origine",
    life_span: "Durata della vita",
    weight: "Peso",
    height: "Altezza",
    unknown: "Sconosciuta",
    no_image: "Nessuna immagine",
  },
};