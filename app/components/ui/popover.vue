<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from "shadcn-vue/popover"
</script>

<template>
  <Popover>
    <!-- Trigger -->
    <PopoverTrigger>
      <button class="btn">Open Popover</button>
    </PopoverTrigger>

    <!-- Content -->
    <PopoverContent
      align="center"
      sideOffset="4"
      class="z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md
             data-[state=open]:animate-in data-[state=closed]:animate-out
             data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
             data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
             data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
             data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    >
      <p>This is popover content in Vue.</p>
    </PopoverContent>
  </Popover>
</template>
