<script setup lang="ts">
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'radix-vue'

// Radix uses 'CollapsibleRoot', but we can export/use it as 'Collapsible'
const Collapsible = CollapsibleRoot
</script>

<template>
  <CollapsibleRoot v-slot="{ open }">
    <slot :open="open" />
  </CollapsibleRoot>
</template>