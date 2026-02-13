<script setup lang="ts">
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-vue-next'

definePageMeta({
  layout: 'auth'
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)

const { login, isLoading } = useAuth()
const { addToast } = useToast()

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    addToast({
      title: 'Error',
      description: 'Please fill in all fields',
      variant: 'destructive',
    })
    return
  }

  try {
    await login(email.value, password.value)
    addToast({
      title: 'Welcome back!',
      description: 'Successfully signed in.',
      variant: 'success'
    })
    await navigateTo('/dashboard')
  } catch (error) {
    addToast({
      title: 'Login failed',
      description: 'Invalid email or password.',
      variant: 'destructive',
    })
  }
}
</script>

<template>
  <div class="card-glass p-8 animate-in fade-in duration-500">
    <div class="text-center mb-8">
      <div class="mx-auto mb-6 w-20 h-20 rounded-3xl gradient-brand flex items-center justify-center glow-blue shadow-2xl">
        <span class="text-3xl font-bold text-white font-display">SK</span>
      </div>
      <h2 class="text-3xl font-bold mb-2 font-display text-gradient-primary">Welcome Back</h2>
      <p class="text-muted-foreground">Sign in to your SKLoud SDS account</p>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium mb-2">Email</label>
        <div class="relative">
          <Mail class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium mb-2">Password</label>
        <div class="relative">
          <Lock class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            class="w-full pl-12 pr-12 py-3 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <EyeOff v-if="showPassword" class="w-5 h-5" />
            <Eye v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div class="flex justify-end">
        <NuxtLink 
          to="/forgot-password" 
          class="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Forgot password?
        </NuxtLink>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="btn-yellow w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <template v-if="isLoading">
          <Loader2 class="w-5 h-5 mr-2 animate-spin inline" />
          Signing in...
        </template>
        <template v-else>
          Sign In
        </template>
      </button>
    </form>

    <div class="mt-8 text-center">
      <p class="text-sm text-muted-foreground">
        Don't have an account? 
        <NuxtLink 
          to="/register" 
          class="font-medium text-gradient-secondary hover:opacity-80 transition-opacity"
        >
          Create one
        </NuxtLink>
      </p>
    </div>

    <div class="mt-6 p-4 rounded-2xl bg-gradient-to-r from-skloud-yellow/10 to-skloud-pink/10 border border-border">
      <p class="text-xs text-center text-muted-foreground">
        <span class="font-semibold text-gradient-accent">Demo:</span> Use any email (add "admin" for admin access)
      </p>
    </div>
  </div>
</template>