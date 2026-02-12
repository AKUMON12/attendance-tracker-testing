<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

// 1. Inline Middleware for instant redirect (client-side only)
definePageMeta({
  middleware: [
    function (to, from) {
      // Only run middleware on client side
      if (process.client) {
        const { isAuthenticated } = useAuth()
        
        // If we already know the status, redirect immediately
        if (isAuthenticated.value) {
          return navigateTo('/attendance')
        } else {
          return navigateTo('/login')
        }
      }
    },
  ],
})

const { isAuthenticated, isLoading } = useAuth()

// 2. Watcher for auth status (if isLoading changes after mount)
watchEffect(() => {
  if (process.client && !isLoading.value) {
    if (isAuthenticated.value) {
      navigateTo('/attendance')
    } else {
      navigateTo('/login')
    }
  }
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <GradientMeshBackground />
    
    <div class="relative z-10 text-center animate-in fade-in duration-700">
      <div class="mx-auto mb-6 w-24 h-24 rounded-3xl gradient-primary flex items-center justify-center shadow-2xl glow-blue">
        <span class="text-4xl font-bold text-primary-foreground">SK</span>
      </div>
      
      <h1 class="text-4xl font-display font-bold mb-2">
        <span class="text-gradient-primary">SKLoud</span>
      </h1>
      <p class="text-xl text-muted-foreground mb-8">Attendance Tracker</p>
      
      <div class="flex items-center justify-center gap-2 text-muted-foreground">
        <Loader2 class="w-5 h-5 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  </div>
</template>