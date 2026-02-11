<script setup lang="ts">
import GradientMeshBackground from '@/components/GradientMeshBackground.vue'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 relative">
    <GradientMeshBackground />
    
    <div class="relative z-10 w-full max-w-md animate-fade-in">
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