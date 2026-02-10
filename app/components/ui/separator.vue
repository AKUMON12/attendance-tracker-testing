<script setup lang="ts">
import { Separator } from "shadcn-vue/separator"
</script>

<template>
  <div class="space-y-4">
    <p>Section 1</p>
    <!-- Horizontal Separator -->
    <Separator orientation="horizontal" class="shrink-0 bg-border h-[1px] w-full" />

    <p>Section 2</p>
    <!-- Vertical Separator -->
    <div class="flex h-10 items-center space-x-4">
      <span>Item A</span>
      <Separator orientation="vertical" class="shrink-0 bg-border h-full w-[1px]" />
      <span>Item B</span>
    </div>
  </div>
</template>
