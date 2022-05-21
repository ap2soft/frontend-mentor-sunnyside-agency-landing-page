const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      headings: ["Fraunces", ...defaultTheme.fontFamily.serif],
      content: ["Barlow", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "image-header": "url('../images/mobile/image-header.jpg')",
        "image-header-desktop": "url('../images/desktop/image-header.jpg')",
        "image-graphic-design":
          "url('../images/mobile/image-graphic-design.jpg')",
        "image-graphic-design-desktop":
          "url('../images/desktop/image-graphic-design.jpg')",
        "image-photography": "url('../images/mobile/image-photography.jpg')",
        "image-photography-desktop":
          "url('../images/desktop/image-photography.jpg')",
      },
      colors: {
        beige: "hsl(26, 100%, 99%)",
        yellow: "hsl(51, 100%, 49%)",
        red: "hsl(7, 99%, 70%)",
        green: {
          DEFAULT: "hsl(167, 40%, 24%)",
          light: "hsl(167, 44%, 70%)",
          dark: "hsl(168, 34%, 41%)",
        },
        blue: "hsl(198, 62%, 26%)",
        gray: {
          darkest: "hsl(212, 27%, 19%)",
          darker: "hsl(213, 9%, 39%)",
        },
      },
      letterSpacing: {
        widest: "0.2rem",
      },
    },
  },
  plugins: [],
};
