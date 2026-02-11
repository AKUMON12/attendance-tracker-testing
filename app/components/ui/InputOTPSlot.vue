<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  index: number
  class?: string
}>()
</script>

<template>
  <div
    :class="cn(
      'relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      props.class
    )"
  >
    <slot />
  </div>
</template>