<script setup lang="ts">
import { OTPInput } from 'vue-input-otp'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  modelValue?: string
  maxlength?: number // Added this to props
  class?: string
}>(), {
  maxlength: 6 // Defaulting to 6 characters
})

const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <OTPInput
    :maxlength="maxlength" 
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event)"
    :container-class="cn('flex items-center gap-2 has-[:disabled]:opacity-50', props.class)"
  >
    <slot />
  </OTPInput>
</template>