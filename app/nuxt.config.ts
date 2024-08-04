// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || "http://backend:8000/api",
    },
  },
});
