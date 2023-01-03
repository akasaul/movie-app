module.exports = {
    mode: "jit",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#171717",
                red: "#991b1b",
                gray: "#3f3f46",
                lightGray: "#737373"
            },
            fontFamily: {
                montserat: 'Montserrat'
            }
        },
    },
    plugins: [require("daisyui")],
}
