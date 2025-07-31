
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "swiper/css": "swiper/css/swiper.css",
      "swiper/css/effect-coverflow": "swiper/css/effect-coverflow.css",
    },
  },
});

