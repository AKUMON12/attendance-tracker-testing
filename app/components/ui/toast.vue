<script setup lang="ts">
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction
} from "shadcn-vue/toast"

import { X } from "lucide-vue-next"

const showToast = ref(false)
</script>

<template>
  <ToastProvider>
    <!-- Trigger -->
    <button class="btn" @click="showToast = true">Show Toast</button>

    <!-- Toast -->
    <Toast v-if="showToast" variant="default" class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 rounded-md border p-6 pr-8 shadow-lg">
      <div class="flex flex-col">
        <ToastTitle>Notification Title</ToastTitle>
        <ToastDescription>This is a toast message in Vue.</ToastDescription>
      </div>

      <ToastAction altText="Undo" class="ml-auto">
        Undo
      </ToastAction>

      <ToastClose class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 hover:text-foreground">
        <X class="h-4 w-4" />
      </ToastClose>
    </Toast>

    <!-- Viewport -->
    <ToastViewport class="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]" />
  </ToastProvider>
</template>
