<script setup lang="ts">
// Modern auth layout with SKLoud SDS design
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Modern gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-skloud-blue via-skloud-purple to-skloud-pink opacity-10"></div>
    
    <!-- Animated background elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-skloud-yellow/20 to-skloud-pink/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-skloud-blue/20 to-skloud-purple/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-skloud-pink/20 to-skloud-yellow/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
    
    <div class="relative z-10 w-full max-w-md">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>