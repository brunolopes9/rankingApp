import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      "/WeatherForecast": {
        target: "https://localhost:7115",
        secure: false,
      },
      "/Item": {
        target: "https://localhost:7115",
        secure: false,
      },
    },
  },
})
