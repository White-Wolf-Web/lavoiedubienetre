import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-background': '#f5f5f5', // Couleur de fond personnalisée
      },
      maxWidth: {
        'site-max': '1200px', // Largeur maximale pour le contenu
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'], // Police pour les titres
        'body': ['Open Sans', 'sans-serif'], // Police pour le corps du texte
      },
    },
  },
  plugins: [],
};
export default config;
