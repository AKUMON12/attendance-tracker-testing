<script setup lang="ts">
import { useForm } from 'vee-validate'
const { handleSubmit, errors } = useForm()
</script>

<template>
  <form @submit="handleSubmit(onSubmit)">
    <div class="space-y-2">
      <label for="email" class="text-sm font-medium">Email</label>
      <input id="email" name="email" type="email" class="input" />
      <p v-if="errors.email" class="text-sm text-destructive">{{ errors.email }}</p>
    </div>
  </form>
</template>
