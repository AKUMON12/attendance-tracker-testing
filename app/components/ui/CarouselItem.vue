<script setup lang="ts">
import { useInjectCarousel } from './useCarousel'
const { orientation } = useInjectCarousel()!
</script>

<template>
  <div 
    role="group" 
    aria-roledescription="slide" 
    :class="['min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4']"
  >
    <slot />
  </div>
</template>