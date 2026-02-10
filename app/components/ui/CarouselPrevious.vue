<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { useInjectCarousel } from './useCarousel'

const { orientation, canScrollPrev, scrollPrev } = useInjectCarousel()!
</script>

<template>
  <Button
    :disabled="!canScrollPrev"
    variant="outline"
    size="icon"
    class="absolute h-8 w-8 rounded-full"
    :class="orientation === 'horizontal' 
      ? '-left-12 top-1/2 -translate-y-1/2' 
      : '-top-12 left-1/2 -translate-x-1/2 rotate-90'"
    @click="scrollPrev"
  >
    <ArrowLeft class="h-4 w-4" />
    <span class="sr-only">Previous slide</span>
  </Button>
</template>