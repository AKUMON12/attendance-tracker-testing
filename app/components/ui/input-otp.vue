<script setup lang="ts">
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "shadcn-vue/input-otp"
</script>

<template>
  <InputOTP>
    <InputOTPGroup>
      <InputOTPSlot index="0" />
      <InputOTPSlot index="1" />
      <InputOTPSeparator />
      <InputOTPSlot index="2" />
      <InputOTPSlot index="3" />
    </InputOTPGroup>
  </InputOTP>
</template>
