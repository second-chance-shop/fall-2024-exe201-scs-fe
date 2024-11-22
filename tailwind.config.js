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

            animation: {
                "running-border": "running-border 6s linear infinite",
                jump: "jump 1s infinite",
                rotate: "rotate 2s infinite",
                dance: "dance 2s infinite",
            },
            keyframes: {
                "running-border": {
                    "0%": {
                        borderImageSource:
                            "linear-gradient(to right, #6EE7B7, #3B82F6, #6366F1, #9333EA)",
                    },
                    "25%": {
                        borderImageSource:
                            "linear-gradient(to right, #3B82F6, #6366F1, #9333EA, #6EE7B7)",
                    },
                    "50%": {
                        borderImageSource:
                            "linear-gradient(to right, #6366F1, #9333EA, #6EE7B7, #3B82F6)",
                    },
                    "75%": {
                        borderImageSource:
                            "linear-gradient(to right, #9333EA, #6EE7B7, #3B82F6, #6366F1)",
                    },
                    "100%": {
                        borderImageSource:
                            "linear-gradient(to right, #6EE7B7, #3B82F6, #6366F1, #9333EA)",
                    },
                },
                jump: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                rotate: {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                dance: {
                    "0%, 100%": { transform: "rotate(0deg) scale(1)" },
                    "25%": { transform: "rotate(10deg) scale(1.1)" },
                    "50%": { transform: "rotate(-10deg) scale(1.1)" },
                    "75%": { transform: "rotate(5deg) scale(0.9)" },
                },
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
