<script setup lang="ts">
import { Label } from "shadcn-vue/label"
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <input
      id="email"
      type="email"
      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base
             placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2
             focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed
             disabled:opacity-50 md:text-sm"
    />
  </div>
</template>
