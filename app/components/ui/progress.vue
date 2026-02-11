<script setup lang="ts">
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  value?: number
  max?: number
  class?: string
}>()
</script>

<template>
  <ProgressRoot
    v-bind="props"
    :class="cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', props.class)"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="`transform: translateX(-${100 - (value || 0)}%)`"
    />
  </ProgressRoot>
</template>