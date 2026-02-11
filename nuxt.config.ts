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
  // ... existing config
  modules: [
    '@nuxtjs/tailwindcss',
    'lucide-nuxt',
    '@nuxtjs/color-mode'
  ],

  components: [
    {
      path: '~/components/ui',
      // This ensures components are registered properly
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