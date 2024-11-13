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
                'cardColor': 'rgb(230, 244, 247)',
                'topColor': 'rgb(182, 194, 180)',
                'backGroundColor': 'rgb(237, 200, 175)',
                'bottomColor': 'rgb(178, 138, 109)',
                'nameColor': 'rgb(150, 147, 151)',
            },
        },
    },
    plugins: [],
});