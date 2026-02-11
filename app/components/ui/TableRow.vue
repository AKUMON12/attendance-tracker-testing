<!-- TableRow.vue -->
<script setup lang="ts">
import { cn } from "@/lib/utils"
</script>

<template>
  <tr
    :class="cn('border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50', $attrs.class as string)"
  >
    <slot />
  </tr>
</template>
