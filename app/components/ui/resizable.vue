<script setup lang="ts">
import { PaneGroup as PaneGroupRaw } from 'paneforge'
import { cn } from '@/lib/utils'
import { useAttrs, type Component } from 'vue'

// Cast to bypass the "Brand" requirement
const PaneGroup = PaneGroupRaw as unknown as Component

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
</script>

<template>
  <PaneGroup 
    v-bind="attrs"
    :class="cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col', 
      attrs.class as string
    )"
  >
    <slot />
  </PaneGroup>
</template>