<script setup lang="ts">
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "shadcn-vue/resizable"
import { GripVertical } from "lucide-vue-next"
</script>

<template>
  <ResizablePanelGroup direction="horizontal" class="flex h-full w-full">
    <!-- Left Panel -->
    <ResizablePanel defaultSize="50">
      <div class="p-4">Left Content</div>
    </ResizablePanel>

    <!-- Handle -->
    <ResizableHandle class="relative flex w-px items-center justify-center bg-border">
      <div class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical class="h-2.5 w-2.5" />
      </div>
    </ResizableHandle>

    <!-- Right Panel -->
    <ResizablePanel defaultSize="50">
      <div class="p-4">Right Content</div>
    </ResizablePanel>
  </ResizablePanelGroup>
</template>
