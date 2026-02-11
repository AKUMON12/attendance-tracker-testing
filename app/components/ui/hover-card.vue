<script setup lang="ts">
import { HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'

// We use the Radix primitives directly
const HoverCard = HoverCardRoot
</script>

<template>
  <HoverCardRoot>
    <slot name="trigger" />
    <HoverCardPortal>
      <HoverCardContent
        :class="cn('z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', $attrs.class as string)"
      >
        <slot />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardRoot>
</template>