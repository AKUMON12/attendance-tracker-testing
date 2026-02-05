import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2026-02-05',

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET, // This picks up the key from .env
  },

  nitro: {
    plugins: [
      fileURLToPath(new URL('./server/plugins/mongodb.ts', import.meta.url))
    ]
  },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'lucide-nuxt']
})