import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/scripts',
    '@pinia/nuxt',
    'nuxt-swiper',
    'nuxt-marquee'
  ],
  imports: {
    autoImport: true,
  },
  components: true,

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/changeColor/' : '/',
    buildAssetsDir: '/static/',
    head: {
      title: `${process.env.NUXT_APP_TITLE || 'BBIN Template'}｜BBIN Template`,
      meta: [
        { name: 'description', content: 'description' },
        { property: 'og:title', content: 'title' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: process.env.NODE_ENV === 'production'
            ? `/${process.env.NUXT_APP_TITLE}/image/favicon.ico`
            : 'image/favicon.ico'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      NUXT_APP_TITLE: process.env.NUXT_APP_TITLE || 'BBIN Template',
      imageBasePath: process.env.NODE_ENV === 'production' ? `/${process.env.NUXT_APP_TITLE}` : '',
      themeMode: process.env.NUXT_PUBLIC_THEME_MODE,
      themeColor: process.env.NUXT_PUBLIC_THEME_COLOR
    },
  },

  plugins: [
    '~/plugins/fetchData.js'
  ],

  css: [
    '~/assets/sass/app.sass',
  ],
  postcss: {
    plugins: {
      cssnano: {
        preset: ['default', {
          colormin: false,
        }],
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler',
          additionalData: `
            $imageBasePath: '${process.env.NODE_ENV === 'production' ? `/${process.env.NUXT_APP_TITLE}/` : ''}'
          `
        },
      }
    }
  },

  nitro: {
    prerender: {
      routes: ['/ball', '/card', '/game', '/live', '/lottery', '/article']
    }
  }
})