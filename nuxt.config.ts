export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  nitro: {
    devProxy: {
      "/api": {
        target: "https://api.dev.numbers.ae",
        changeOrigin: true,
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["typescript"],
  },

  buildModules: ["@pinia/nuxt"],

  compatibilityDate: "2024-09-03",
});
