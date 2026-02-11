<script setup lang="ts">
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'radix-vue'
import { Check, ChevronRight, Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const Menubar = MenubarRoot
</script>

<template>
  <MenubarRoot
    :class="cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', $attrs.class as string)"
  >
    <slot />
  </MenubarRoot>
</template>