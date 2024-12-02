export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: [
      "typescript", 
    ],
  },


  buildModules: ["@pinia/nuxt"],

  compatibilityDate: "2024-09-03",
});
