/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            // Add custom utility for scrollbar hiding
            scrollbarHide: {
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
            },
            width: "2000px",

            keyframes: {
                cardHover: {
                    "0%": { transform: "scale(1)", boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
                    "50%": {
                        transform: "scale(1.1)",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                    },
                    "100%": { transform: "scale(1)", boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
                },
            },
            animation: {
                cardHover: "cardHover 0.5s ease-in-out",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                robotoMono: ["Roboto Mono", "monospace"],
                oswald: ["Oswald", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
                playfair: ["Playfair Display", "serif"],
                manrope: ["Manrope", "sans-serif"],
                quicksand: ["Quicksand", "sans-serif"],
                dosis: ["Dosis", "sans-serif"],
                ballet: ["Ballet", "cursive"],
                hanoienne: ['"L’Hanoienne"', "serif"], // Add L’Hanoienne Free Typeface
            },
        },
    },
    plugins: [],
};
