<script setup lang="ts">
import { Toggle } from "radix-vue"
import { cn } from "@/lib/utils"

const isOn = ref(false)
</script>

<template>
  <Toggle
    v-model:pressed="isOn"
    :class="cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-10 px-3',
      $attrs.class as string
    )"
  >
    <slot />
  </Toggle>
</template>