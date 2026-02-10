<script setup lang="ts">
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose
} from "shadcn-vue/toast"

// Example composable: you’d implement this similar to your React `useToast`
const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="toast"
      class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 rounded-md border p-6 pr-8 shadow-lg"
    >
      <div class="grid gap-1">
        <ToastTitle v-if="toast.title">{{ toast.title }}</ToastTitle>
        <ToastDescription v-if="toast.description">{{ toast.description }}</ToastDescription>
      </div>
      <component v-if="toast.action" :is="toast.action" />
      <ToastClose />
    </Toast>
    <ToastViewport class="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]" />
  </ToastProvider>
</template>
