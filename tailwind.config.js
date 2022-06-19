/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "custom-strong-cyan": "hsl(172, 67%, 45%)",
                "custom-very-dark-cyan": "hsl(183, 100%, 15%)",
                "custom-dark-grayish-cyan": "hsl(186, 14%, 43%)",
                "custom-grayish-cyan": "hsl(184, 14%, 56%)",
                "custom-light-grayish-cyan": "hsl(185, 41%, 84%)",
                "custom-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
                "custom-white": "hsl(0, 0%, 100%)"
            }
        }
    },
    plugins: []
};