<script setup lang="ts">
import {
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose
} from "radix-vue"

// Nuxt auto-imports useToast, so this just works!
const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <ToastRoot
      v-for="toast in toasts"
      :key="toast.id"
      :open="toast.open"
      class="fixed bottom-4 right-4 z-[100] flex w-full max-w-md items-center justify-between space-x-4 overflow-hidden rounded-md border bg-background p-6 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full"
      :class="[
        toast.variant === 'destructive' ? 'border-destructive bg-destructive text-destructive-foreground' : 'bg-background',
        toast.variant === 'success' ? 'border-green-500 bg-green-50 text-green-900' : ''
      ]"
    >
      <div class="grid gap-1">
        <ToastTitle v-if="toast.title" class="text-sm font-semibold">
          {{ toast.title }}
        </ToastTitle>
        <ToastDescription v-if="toast.description" class="text-sm opacity-90">
          {{ toast.description }}
        </ToastDescription>
      </div>
      
      <ToastClose class="rounded-md p-1 text-foreground/50 hover:text-foreground">
        <span class="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </ToastClose>
    </ToastRoot>
    <ToastViewport class="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]" />
  </ToastProvider>
</template>