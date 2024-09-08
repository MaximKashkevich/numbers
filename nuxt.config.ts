// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // build: {
  //   transpile: [
  //     // ...другие значения
  //     "typescript",
  //   ],
  // },

  compatibilityDate: "2024-09-03",
});
