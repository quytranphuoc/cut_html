
import defaultConfig from "shadcn/ui/tailwind.config";
import { BREAKPOINTS, COLORS, FONT_SIZES } from "./src/constants.js";


const config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    container: false,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        "orange-primary": "#ff8a00",
        "orange-primary-11": "rgba(229, 132, 17, 1)",
        "orange-primary-1": "rgba(246, 151, 63, 1)",
        "blue-primary": "#00d6c9",
        "dark-gray": "#1e1e1e",
        "dark-gray-01": "rgba(30, 30, 30, 1)",
        "dark-gray-1": "rgba(13, 27, 57, 1)",
        "white-bg": "#ffffff",
        "gray-bg": "rgba(124, 124, 124, 1)",
        "light-gray-bg": "#f7f7f7",
        "white-border-60": "#ffffff99",
        "white-border-15": "#ffffff26",
        "white-border-01": "rgba(255, 255, 255, 1)",
        "white-border-02": "rgba(255, 255, 255, 0.2)",
        "white-border-06": "rgba(255, 255, 255, 0.6)",
        "white-border-47": "rgba(247, 247, 247, 1)",
        "white-border-50": "rgba(250, 250, 250, 1)",
        "white-border-84": "rgba(255, 255, 255, 0.84)",
        "pale-border-1": "rgba(238, 238, 238, 1)",
        "text-light-gray": "#f5f5f5",
        "text-inter": "rgba(141, 141, 141, 1)",
        "text-pc": "rgba(13, 27, 57, 1)",
        "yellow-primary": "rgba(246, 183, 111, 1)",

       ...COLORS,
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xxxl: "80px",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        ...FONT_SIZES,
      },
      screens: {
        "xs-custom-max": `${BREAKPOINTS.xs.max}px`,
        "xs-custom-min": `${BREAKPOINTS.xs.min}px`,
        "xs-custom-max-lv": `${BREAKPOINTS.xs.maxLv}px`,
        "xs-custom": `${BREAKPOINTS.xs.custom}px`,
        "sm-custom": `${BREAKPOINTS.sm.custom}px`,
        "md-custom": `${BREAKPOINTS.md.custom}px`,
        "md-custom-min": `${BREAKPOINTS.md.min}px`,
        "md-custom-max": `${BREAKPOINTS.md.max}px`,
        "lg-custom-max": `${BREAKPOINTS.lg.max}px`,
        "lg-custom": `${BREAKPOINTS.lg.custom}px`,
        "xl-custom-max": `${BREAKPOINTS.xl.max}px`,
        "xl-custom": `${BREAKPOINTS.xl.custom}px`,
        "2xl-custom": `${BREAKPOINTS["2xl"].custom}px`,
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config


