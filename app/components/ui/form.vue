<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as zod from 'zod'
import { toTypedSchema } from '@vee-validate/zod' // This matches the new install

// 1. Define what your form looks like (Validation Schema)
const formSchema = toTypedSchema(zod.object({
  email: zod.string().email('Please enter a valid email address'),
}))

// 2. Initialize the form
const { handleSubmit, errors, defineField } = useForm({
  validationSchema: formSchema,
})

// 3. Define the fields (this links the input to vee-validate)
const [email, emailProps] = defineField('email')

// 4. Create the onSubmit function that was missing
const onSubmit = handleSubmit((values) => {
  console.log('Form submitted successfully:', values)
  // This is where you would call your API/Database
})
</script>

<template>
  <form @submit="onSubmit" class="space-y-6">
    <div class="space-y-2">
      <label for="email" class="text-sm font-medium leading-none">Email</label>
      
      <input 
        id="email" 
        v-model="email" 
        v-bind="emailProps"
        type="email" 
        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
      />

      <p v-if="errors.email" class="text-sm font-medium text-destructive">
        {{ errors.email }}
      </p>
    </div>

    <button type="submit" class="btn bg-primary text-primary-foreground px-4 py-2 rounded-md">
      Submit
    </button>
  </form>
</template>