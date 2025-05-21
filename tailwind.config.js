module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [],
}
