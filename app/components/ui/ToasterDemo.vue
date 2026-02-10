<script setup lang="ts">
import { useToast } from "@/composables/useToast"

const { addToast, toasts } = useToast()

function showToast() {
  addToast({ title: "Hello!", description: "This is a toast message." })
}
</script>

<template>
  <button @click="showToast" class="btn">Show Toast</button>

  <div v-for="t in toasts" :key="t.id" class="p-2 border rounded mb-2">
    <p class="font-bold">{{ t.title }}</p>
    <p class="text-sm text-muted-foreground">{{ t.description }}</p>
  </div>
</template>
