<script setup lang="ts">
import { Separator } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  class?: string
}>()
</script>

<template>
  <Separator
    :orientation="orientation"
    :decorative="decorative"
    :class="cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      props.class
    )"
  />
</template>