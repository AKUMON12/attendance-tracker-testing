<script setup lang="ts">
import { DrawerRoot } from 'vaul-vue'

interface DrawerProps {
  shouldScaleBackground?: boolean
  open?: boolean
}

const props = withDefaults(defineProps<DrawerProps>(), {
  shouldScaleBackground: true
})

const emits = defineEmits(['update:open'])
</script>

<template>
  <DrawerRoot 
    :should-scale-background="shouldScaleBackground" 
    :open="open"
    @update:open="emits('update:open', $event)"
  >
    <slot />
  </DrawerRoot>
</template>