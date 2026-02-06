<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "shadcn-vue/dialog"

import { X } from "lucide-vue-next"
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <button class="btn">Open Dialog</button>
    </DialogTrigger>
    <DialogContent class="max-w-lg p-6 border bg-background shadow-lg sm:rounded-lg">
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>This is a description inside the dialog.</DialogDescription>
      </DialogHeader>

      <p class="text-sm">Dialog body content goes here.</p>

      <DialogFooter>
        <button class="btn">Confirm</button>
        <DialogClose>
          <button class="btn-outline flex items-center gap-2">
            <X class="h-4 w-4" /> Close
          </button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
