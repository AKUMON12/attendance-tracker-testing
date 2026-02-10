<script setup lang="ts">
import { cn } from "@/lib/utils"
</script>

<template>
  <!-- Table -->
  <div class="relative w-full overflow-auto">
    <table
      :class="cn('w-full caption-bottom text-sm', $attrs.class)"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
</template>
