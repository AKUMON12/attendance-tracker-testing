<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'radix-vue'
import { Check } from 'lucide-vue-next'

const checked = defineModel<boolean>() // This replaces the manual ref error
</script>

<template>
  <CheckboxRoot
    v-model:checked="checked"
    class="h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="h-4 w-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>