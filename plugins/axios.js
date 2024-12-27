// import axios from "axios";
// import { defineNuxtPlugin } from "#app";
// import { useAuthStore } from "~/stores/auth";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.hook("app:mounted", () => {
//     const authStore = useAuthStore();

//     axios.interceptors.request.use((config) => {
//       const token = authStore.authToken;
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//         console.log(token);
//       }
//       return config;
//     });

//     axios.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         console.error("Axios Error:", error.response?.data || error.message);
//         return Promise.reject(error);
//       }
//     );
//   });
// });
