<script setup lang="ts">
import { useInjectCarousel } from './useCarousel'
const { carouselRef, orientation } = useInjectCarousel()!
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div :class="['flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col']">
      <slot />
    </div>
  </div>
</template>