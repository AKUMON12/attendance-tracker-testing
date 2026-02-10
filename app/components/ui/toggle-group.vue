<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "shadcn-vue/toggle-group"

// Example state
const selected = ref("bold")
</script>

<template>
  <ToggleGroup
    v-model="selected"
    type="single"
    class="flex items-center justify-center gap-1"
  >
    <ToggleGroupItem
      value="bold"
      class="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium
             transition-colors data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
    >
      Bold
    </ToggleGroupItem>

    <ToggleGroupItem
      value="italic"
      class="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium
             transition-colors data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
    >
      Italic
    </ToggleGroupItem>

    <ToggleGroupItem
      value="underline"
      class="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium
             transition-colors data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
    >
      Underline
    </ToggleGroupItem>
  </ToggleGroup>
</template>
