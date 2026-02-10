<script setup lang="ts">
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetOverlay,
  SheetPortal
} from "shadcn-vue/sheet"

import { X } from "lucide-vue-next"
</script>

<template>
  <Sheet>
    <!-- Trigger -->
    <SheetTrigger>
      <button class="btn">Open Sheet</button>
    </SheetTrigger>

    <!-- Content -->
    <SheetContent side="right" class="fixed inset-y-0 right-0 h-full w-3/4 border-l bg-background p-6 shadow-lg sm:max-w-sm">
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>This is a description inside the sheet.</SheetDescription>
      </SheetHeader>

      <div class="flex-1 p-4">
        <p>Sheet body content goes here.</p>
      </div>

      <SheetFooter>
        <button class="btn">Confirm</button>
        <SheetClose>
          <button class="btn-outline flex items-center gap-2">
            <X class="h-4 w-4" /> Close
          </button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
