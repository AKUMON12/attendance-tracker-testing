<script setup lang="ts">
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarGroup,
  MenubarShortcut
} from "shadcn-vue/menubar"

import { Check, ChevronRight, Circle } from "lucide-vue-next"
</script>

<template>
  <Menubar class="flex h-10 items-center space-x-1 rounded-md border bg-background p-1">
    <!-- File Menu -->
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
        <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Exit</MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <!-- Edit Menu -->
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarCheckboxItem :checked="true">Show Line Numbers</MenubarCheckboxItem>
        <MenubarRadioGroup>
          <MenubarRadioItem value="light">Light Theme</MenubarRadioItem>
          <MenubarRadioItem value="dark">Dark Theme</MenubarRadioItem>
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>

    <!-- Submenu Example -->
    <MenubarMenu>
      <MenubarTrigger>More</MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>
            Options
            <ChevronRight class="ml-auto h-4 w-4" />
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Sub Option 1</MenubarItem>
            <MenubarItem>Sub Option 2</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
