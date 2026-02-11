<script setup lang="ts">
// Defining a more specific type helps TypeScript understand the error object
interface NuxtError {
  statusCode?: string | number
  message?: string
}

const props = defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <h1 class="text-9xl font-bold">{{ error?.statusCode || '500' }}</h1>
    
    <p class="text-xl mt-4 text-muted-foreground">
      {{ error?.message || 'Something went wrong on our end.' }}
    </p>
    
    <button 
      @click="handleError" 
      class="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
    >
      Go Home
    </button>
  </div>
</template>