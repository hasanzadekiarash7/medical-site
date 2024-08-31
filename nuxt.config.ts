// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon-tw",
    "@nuxt/fonts",
    "@nuxt/icon",
    "nuxt-swiper",
    "nuxt-viewport",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/skeleton.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_variables.scss" as *;',
        },
      },
    },
  },
  experimental: {
    viewTransition: true
  },
  imports: {
    dirs: ["./stores"],
    autoImport: true,
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  viewport: {
    breakpoints: {
      desktop: 900,
      desktopMedium: 1400,
      desktopWide: 1900,

      mobile: 300,
      mobileMedium: 375,
      mobileWide: 450,

      tablet: 450,
      tabletMedium: 750,
      tabletWide: 900,
    },
  },
});
