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
  <Card class="glass-card border-0 shadow-2xl">
    <CardHeader class="space-y-1 text-center pb-8">
      <div class="mx-auto mb-4 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg glow-blue">
        <span class="text-2xl font-bold text-primary-foreground">SK</span>
      </div>
      <CardTitle class="text-2xl font-display font-bold text-gradient-primary">
        Welcome Back
      </CardTitle>
      <CardDescription class="text-muted-foreground">
        Sign in to your SKLoud account
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="space-y-2">
          <Label for="email" class="text-sm font-medium">Email</Label>
          <div class="relative">
            <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              v-model="email"
              type="email"
              placeholder="you@example.com"
              class="pl-10 bg-muted/50 border-muted focus:border-primary"
            />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="password" class="text-sm font-medium">Password</Label>
          <div class="relative">
            <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="pl-10 pr-10 bg-muted/50 border-muted focus:border-primary"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <EyeOff v-if="showPassword" class="w-4 h-4" />
              <Eye v-else class="w-4 h-4" />
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

        <Button
          type="submit"
          :disabled="isLoading"
          class="w-full gradient-primary text-primary-foreground font-medium h-11 shadow-lg hover:shadow-xl transition-all duration-200 glow-blue"
        >
          <template v-if="isLoading">
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
            Signing in...
          </template>
          <template v-else>
            Sign In
          </template>
        </Button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-muted-foreground">
          Don't have an account? 
          <NuxtLink 
            to="/register" 
            class="font-medium text-secondary hover:text-secondary/80 transition-colors"
          >
            Create one
          </NuxtLink>
        </p>
      </div>

      <div class="mt-4 p-3 rounded-lg bg-muted/30 border border-border">
        <p class="text-xs text-center text-muted-foreground">
          <span class="text-accent font-medium">Demo:</span> Use any email (add "admin" for admin access)
        </p>
      </div>
    </CardContent>
  </Card>
</template>