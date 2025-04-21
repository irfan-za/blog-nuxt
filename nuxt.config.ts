import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Tech Blog",
      titleTemplate: "%s | Tech Blog",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  hooks: {
    "pages:extend"(pages) {
      pages.forEach((page) => {
        if (page.path === "/posts/create") {
          page.meta = page.meta || {};
          page.meta.middleware = ["auth"];
        }
      });
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  imports: {
    dirs: ["store"],
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxtjs/mdc",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
});