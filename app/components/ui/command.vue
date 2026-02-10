<script setup lang="ts">
import { 
  ComboboxRoot, 
  ComboboxInput, 
  ComboboxContent, 
  ComboboxEmpty, 
  ComboboxGroup, 
  ComboboxItem,
  ComboboxSeparator 
} from 'radix-vue'
import { Search } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

// We use the Radix Combobox as the engine for the Command palette
</script>

<template>
  <ComboboxRoot
    :open="true"
    class="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"
  >
    <div class="flex items-center border-b px-3" cmdk-input-wrapper>
      <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <ComboboxInput
        class="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search..."
      />
    </div>
    <ComboboxContent class="max-h-[300px] overflow-y-auto overflow-x-hidden">
      <ComboboxEmpty class="py-6 text-center text-sm">No results found.</ComboboxEmpty>
      <slot />
    </ComboboxContent>
  </ComboboxRoot>
</template>