<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot as AlertDialog,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'radix-vue'
import { cn } from '@/lib/utils' // Assuming you have your cn helper
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <slot name="trigger">
        <button class="px-4 py-2 bg-primary text-white rounded-md">Open Dialog</button>
      </slot>
    </AlertDialogTrigger>
    
    <AlertDialogPortal>
      <AlertDialogOverlay class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
      <AlertDialogContent 
        class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
      >
        <div class="flex flex-col space-y-2 text-center sm:text-left">
          <AlertDialogTitle class="text-lg font-semibold">
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription class="text-sm text-muted-foreground">
            This action cannot be undone.
          </AlertDialogDescription>
        </div>

        <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <AlertDialogCancel class="mt-2 sm:mt-0 px-4 py-2 border rounded-md hover:bg-muted">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction class="px-4 py-2 bg-destructive text-white rounded-md hover:bg-destructive/90">
            Confirm
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialog>
</template>