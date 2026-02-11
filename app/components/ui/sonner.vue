<script setup lang="ts">
import { Toaster } from "vue-sonner"
// If the module is installed, Nuxt auto-imports this. 
// If TS still complains, we can use the global helper.
const colorMode = useColorMode()
</script>

<template>
  <Toaster
    :theme="(colorMode.preference as any)"
    class="toaster group"
    :toast-options="{
      classes: {
        toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }"
  />
</template>