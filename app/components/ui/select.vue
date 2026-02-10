<script setup lang="ts">
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
} from "shadcn-vue/select"

import { Check, ChevronDown, ChevronUp } from "lucide-vue-next"

const selected = ref("option1")
</script>

<template>
  <Select v-model="selected">
    <!-- Trigger -->
    <SelectTrigger class="flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm">
      <SelectValue placeholder="Select an option" />
      <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectTrigger>

    <!-- Content -->
    <SelectContent class="relative z-50 max-h-96 min-w-[8rem] rounded-md border bg-popover shadow-md">
      <SelectScrollUpButton>
        <ChevronUp class="h-4 w-4" />
      </SelectScrollUpButton>

      <SelectGroup>
        <SelectLabel>Options</SelectLabel>
        <SelectItem value="option1">
          <Check class="h-4 w-4 absolute left-2" />
          Option 1
        </SelectItem>
        <SelectItem value="option2">
          <Check class="h-4 w-4 absolute left-2" />
          Option 2
        </SelectItem>
      </SelectGroup>

      <SelectSeparator />

      <SelectScrollDownButton>
        <ChevronDown class="h-4 w-4" />
      </SelectScrollDownButton>
    </SelectContent>
  </Select>
</template>
