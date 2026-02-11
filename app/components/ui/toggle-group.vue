<script setup lang="ts">
import { ToggleGroupRoot, ToggleGroupItem } from "radix-vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  modelValue?: string | string[]
  type?: 'single' | 'multiple'
}>()

const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <ToggleGroupRoot
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event)"
    :type="(type as any) || 'single'"
    :class="cn('flex items-center justify-center gap-1', $attrs.class as string)"
  >
    <slot />
  </ToggleGroupRoot>
</template>