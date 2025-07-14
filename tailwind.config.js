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
        ...COLORS,
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
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
};

export default config;
