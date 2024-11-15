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
                '6': 'rgb(192, 153, 107)',
                '1': 'rgb(230, 244, 247)',
                '4': 'rgb(182, 194, 180)',
                '7': 'rgb(237, 200, 175)',
                '5': 'rgb(178, 138, 109)',
                '9': 'rgb(150, 147, 151)',
            },
        },
    },
    plugins: [],
});