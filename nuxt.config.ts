// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/migration

export default defineNuxtConfig({
  telemetry: false, // For nuxt team (anonyous statistics)

  ssr: true,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
    esbuild: {
      drop: ["console"],
    },
  },

  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_APP_URL,
      apiDataUrl: process.env.NUXT_APP_URL + '/datas.json'
    }
  },
  
  app: {
    head: {
      title: 'Valtech Test',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Technical test to enter Valtech as a front-end developper" },
        { name: 'robots', content: process.env.NUXT_PREPROD_APP ? 'none' : 'all' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  
  css: ['~/assets/styles/main.scss'],
  
  plugins: [],

  modules: [
    '@pinia/nuxt',
  ],

  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
        'cssnano': {},
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
  }
});
