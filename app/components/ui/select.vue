<script setup lang="ts">
import { 
  SelectRoot, SelectGroup, SelectValue, SelectTrigger, SelectContent, 
  SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton,
  SelectPortal, SelectViewport
} from 'radix-vue'
import { Check, ChevronDown, ChevronUp } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const Select = SelectRoot
</script>

<template>
  <SelectRoot>
    <slot />
  </SelectRoot>
</template>