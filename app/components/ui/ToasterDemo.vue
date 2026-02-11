<script setup lang="ts">
// No import needed for useToast in Nuxt!
const { toasts, addToast } = useToast()

const show = () => {
  addToast({ 
    title: "Success!", 
    description: "The toast system is live." 
  })
}
</script>

<template>
  <div class="space-y-4">
    <button @click="show" class="bg-primary text-white px-4 py-2 rounded">
      Test Toast
    </button>

    <div v-for="t in toasts" :key="t.id" class="p-2 border rounded border-border">
      <p class="font-bold">{{ t.title }}</p>
      <p class="text-sm">{{ t.description }}</p>
    </div>
  </div>
</template>