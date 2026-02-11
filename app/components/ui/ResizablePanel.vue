<script setup lang="ts">
import { Pane as PaneRaw } from 'paneforge'
import { useAttrs, type Component } from 'vue'

// We cast the raw import to avoid the Svelte "Brand" check
const Pane = PaneRaw as unknown as Component

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()
</script>

<template>
  <Pane v-bind="attrs">
    <slot />
  </Pane>
</template>