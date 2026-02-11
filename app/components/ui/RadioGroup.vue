<script setup lang="ts">
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const RadioGroup = RadioGroupRoot
</script>

<template>
  <RadioGroupRoot :class="cn('grid gap-2', $attrs.class as string)">
    <slot />
  </RadioGroupRoot>
</template>