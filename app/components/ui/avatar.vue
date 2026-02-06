<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from "shadcn-vue/avatar"
</script>

<template>
  <Avatar>
    <AvatarImage src="/user.jpg" alt="User" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</template>
