<script setup lang="ts">
// We use NuxtLink for internal routing performance
defineProps<{ href?: string }>()
</script>

<template>
  <NuxtLink
    :to="href"
    class="transition-colors hover:text-foreground"
  >
    <slot />
  </NuxtLink>
</template>