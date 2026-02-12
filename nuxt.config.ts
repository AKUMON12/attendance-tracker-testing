// Add this line at the very top
import { defineNuxtConfig } from 'nuxt/config'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    shadcn?: {
      componentDir?: string
      prefix?: string
    }
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2026-02-12',
  
  // ... existing config
  modules: [
    '@nuxtjs/tailwindcss',
    'lucide-nuxt',
    '@nuxtjs/color-mode'
  ],

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/attendance-tracker',
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:3000'
    }
  },

  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      pathPrefix: false,
      global: true,
    },
    {
      path: '~/components',
      pathPrefix: false,
      global: true,
    },
  ],
})