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
        },
    },
    plugins: [],
};
