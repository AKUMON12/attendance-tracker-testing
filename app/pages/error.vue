<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-9xl font-bold">{{ error.statusCode }}</h1>
    <p class="text-xl mt-4">{{ error.message || 'Something went wrong' }}</p>
    <button @click="handleError" class="mt-8 px-4 py-2 bg-primary text-white rounded">
      Go Home
    </button>
  </div>
</template>