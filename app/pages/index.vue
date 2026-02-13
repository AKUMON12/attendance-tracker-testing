<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

const { isAuthenticated, isLoading } = useAuth()

// Simple redirect without watchEffect to avoid potential issues
if (process.client) {
  if (!isLoading.value && isAuthenticated.value) {
    navigateTo('/attendance')
  } else if (!isLoading.value && !isAuthenticated.value) {
    navigateTo('/login')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
    <!-- Modern gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-skloud-blue via-skloud-purple to-skloud-pink opacity-5"></div>
    
    <!-- Animated background elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-skloud-yellow/20 to-skloud-pink/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-skloud-blue/20 to-skloud-purple/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-skloud-pink/20 to-skloud-yellow/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    
    <div class="relative z-10 text-center animate-in fade-in duration-700">
      <div class="mx-auto mb-8 w-32 h-32 rounded-3xl gradient-brand flex items-center justify-center glow-blue shadow-2xl">
        <span class="text-5xl font-bold text-white font-display">SK</span>
      </div>
      
      <h1 class="text-6xl font-display font-bold mb-4">
        <span class="text-gradient-primary">SKLoud</span>
      </h1>
      <p class="text-2xl text-muted-foreground mb-8">Software Development Services</p>
      <p class="text-lg text-muted-foreground mb-12">Attendance Tracker</p>
      
      <div class="flex items-center justify-center gap-3 text-muted-foreground">
        <Loader2 class="w-6 h-6 animate-spin" />
        <span class="text-lg">Loading...</span>
      </div>
    </div>
  </div>
</template>