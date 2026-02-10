<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot as Avatar } from 'radix-vue'
</script>

<template>
  <Avatar>
    <AvatarImage src="/user.jpg" alt="User" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</template>
