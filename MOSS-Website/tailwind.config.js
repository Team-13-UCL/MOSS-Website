const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                regular: ['ScandiaRegular', 'sans-serif'],
                bold: ['ScandiaBold', 'sans-serif'],
                area: ['AreaNormalBold', 'sans-serif'],
            },
            colors: {
                'menuColor': '#C0996B',
                'backGroundColor': '#EDC8AF',
                'nameColor': '#969397',
            },
        },
    },
    plugins: [],
});