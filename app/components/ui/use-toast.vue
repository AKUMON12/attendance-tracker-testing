<script setup lang="ts">
const { addToast, toasts } = useToast()

function showToast() {
  addToast({ title: 'Hello!', description: 'This is a toast message.' })
}
</script>

<template>
  <button @click="showToast">Show Toast</button>
  <div v-for="t in toasts" :key="t.id">
    <p>{{ t.title }}</p>
    <p>{{ t.description }}</p>
  </div>
</template>
