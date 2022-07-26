/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                cursor: "cursor .6s ease-in-out infinite alternate",
            },
            keyframes: {
                cursor: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
