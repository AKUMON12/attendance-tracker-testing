<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "shadcn-vue/radio-group"
import { Circle } from "lucide-vue-next"

const selected = ref("option1")
</script>

<template>
  <RadioGroup v-model="selected" class="grid gap-2">
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="option1" id="option1" class="aspect-square h-4 w-4 rounded-full border border-primary" />
      <label for="option1" class="text-sm">Option 1</label>
    </div>

    <div class="flex items-center space-x-2">
      <RadioGroupItem value="option2" id="option2" class="aspect-square h-4 w-4 rounded-full border border-primary" />
      <label for="option2" class="text-sm">Option 2</label>
    </div>
  </RadioGroup>
</template>
