<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup
} from "shadcn-vue/context-menu"

import { Check, ChevronRight, Circle } from "lucide-vue-next"
</script>

<template>
  <ContextMenu>
    <!-- Trigger -->
    <ContextMenuTrigger>
      <button class="btn">Right-click me</button>
    </ContextMenuTrigger>

    <!-- Content -->
    <ContextMenuContent class="z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
      <ContextMenuItem>
        Profile
        <ContextMenuShortcut>⌘P</ContextMenuShortcut>
      </ContextMenuItem>

      <ContextMenuCheckboxItem :checked="true">
        Notifications
      </ContextMenuCheckboxItem>

      <ContextMenuRadioGroup>
        <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
        <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
      </ContextMenuRadioGroup>

      <ContextMenuSeparator />

      <ContextMenuSub>
        <ContextMenuSubTrigger>
          More Options
          <ChevronRight class="ml-auto h-4 w-4" />
        </ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>Sub Item 1</ContextMenuItem>
          <ContextMenuItem>Sub Item 2</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
    </ContextMenuContent>
  </ContextMenu>
</template>
