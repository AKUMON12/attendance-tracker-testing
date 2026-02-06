<script setup lang="ts">
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose
} from "shadcn-vue/drawer"
</script>

<template>
  <Drawer>
    <DrawerTrigger>
      <button class="btn">Open Drawer</button>
    </DrawerTrigger>
    <DrawerContent class="flex flex-col rounded-t-[10px] border bg-background">
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>This is a description inside the drawer.</DrawerDescription>
      </DrawerHeader>

      <div class="p-4">
        <p>Drawer body content goes here.</p>
      </div>

      <DrawerFooter>
        <button class="btn">Save</button>
        <DrawerClose>
          <button class="btn-outline">Cancel</button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
