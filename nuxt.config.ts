// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ["~/assets/sass/style.scss"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",

      meta: [{ name: "description", content: "BomBa about Nuxt 3" }],
      title: "BomBa",
    },
  },
  // ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
  // ssr: false,

  devtools: { enabled: false },
});
