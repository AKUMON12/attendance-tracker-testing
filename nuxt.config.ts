import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET, // This picks up the key from .env
  },

  nitro: {
    plugins: [
      fileURLToPath(new URL('./server/plugins/mongodb.ts', import.meta.url))
    ]
  },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'lucide-nuxt'],

  // Tell Tailwind to use your specific config file
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  // Nuxt 4 directory structure compatibility
  future: {
    compatibilityVersion: 4,
  },

  shadcn: {
    /**
     * In Nuxt 4, prefixing with ./app is usually best for the module
     * to find your shadcn components correctly.
     */
    componentDir: './app/components/ui',
    prefix: ''
  },

  compatibilityDate: '2024-04-03'
})