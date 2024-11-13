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
                'menuColor': 'rgb(192, 153, 107)',
                'backGroundColor': 'rgb(237, 200, 175)',
                'nameColor': 'rgb(150, 147, 151)',
            },
        },
    },
    plugins: [],
});