<script setup lang="ts">
import { ScrollArea, ScrollBar } from "shadcn-vue/scroll-area"
</script>

<template>
  <ScrollArea class="relative overflow-hidden h-48 w-64 rounded-md border">
    <div class="p-4">
      <p v-for="i in 20" :key="i">Item {{ i }}</p>
    </div>
    <ScrollBar orientation="vertical" />
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
</template>
