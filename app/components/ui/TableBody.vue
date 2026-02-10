<!-- TableBody.vue -->
<script setup lang="ts">
import { cn } from "@/lib/utils"
</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', $attrs.class)" v-bind="$attrs">
    <slot />
  </tbody>
</template>
