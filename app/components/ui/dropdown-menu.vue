<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
} from "shadcn-vue/dropdown-menu"

import { Check, ChevronRight, Circle } from "lucide-vue-next"
</script>

<template>
  <DropdownMenu>
    <!-- Trigger -->
    <DropdownMenuTrigger>
      <button class="btn">Open Menu</button>
    </DropdownMenuTrigger>

    <!-- Content -->
    <DropdownMenuContent class="z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>

      <DropdownMenuCheckboxItem :checked="true">
        Notifications
      </DropdownMenuCheckboxItem>

      <DropdownMenuRadioGroup>
        <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>

      <DropdownMenuSeparator />

      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          More Options
          <ChevronRight class="ml-auto h-4 w-4" />
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
          <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
