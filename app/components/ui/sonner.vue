<script setup lang="ts">
import { Toaster, toast } from "vue-sonner"
import { useColorMode } from "@vueuse/core" // or @nuxtjs/color-mode if installed

const colorMode = useColorMode()
</script>

<template>
  <!-- Toaster -->
  <Toaster
    :theme="colorMode.value || 'system'"
    class="toaster group"
    :toastOptions="{
      classNames: {
        toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
      }
    }"
  />

  <!-- Example trigger -->
  <button class="btn" @click="toast('Hello from Vue Sonner!')">
    Show Toast
  </button>
</template>
