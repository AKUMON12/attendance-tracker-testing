<script setup lang="ts">
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from 'lucide-vue-next'

// Explicit imports often need the full path including .vue in Nuxt/Vite for TS
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#components' 
// OR use the relative path if @ is failing:
// import { Card } from '../components/ui/card'

definePageMeta({
  layout: 'auth'
})

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)

const { register, isLoading } = useAuth()
const { addToast } = useToast()

const handleSubmit = async () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    addToast({
      title: 'Error',
      description: 'Please fill in all fields',
      variant: 'destructive', // Ensure this exists in your ToastProps interface
    })
    return
  }

  if (password.value !== confirmPassword.value) {
    addToast({
      title: 'Error',
      description: 'Passwords do not match',
      variant: 'destructive',
    })
    return
  }

  if (password.value.length < 8) {
    addToast({
      title: 'Error',
      description: 'Password must be at least 8 characters',
      variant: 'destructive',
    })
    return
  }

  try {
    await register(email.value, password.value, name.value)
    addToast({
      title: 'Account created!',
      description: 'Welcome to SKLoud Attendance Tracker.',
    })
    // Nuxt equivalent of navigate('/dashboard')
    await navigateTo('/dashboard')
  } catch (error) {
    addToast({
      title: 'Registration failed',
      description: 'Unable to create account. Please try again.',
      variant: 'destructive',
    })
  }
}
</script>

<template>
  <Card class="glass-card border-0 shadow-2xl">
    <CardHeader class="space-y-1 text-center pb-6">
      <div class="mx-auto mb-4 w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shadow-lg glow-pink">
        <span class="text-2xl font-bold text-white">SK</span>
      </div>
      <CardTitle class="text-2xl font-display font-bold text-gradient-accent">
        Create Account
      </CardTitle>
      <CardDescription class="text-muted-foreground">
        Join SKLoud and start tracking your attendance
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="space-y-2">
          <Label for="name" class="text-sm font-medium">Full Name</Label>
          <div class="relative">
            <User class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="name"
              v-model="name"
              type="text"
              placeholder="John Doe"
              class="pl-10 bg-muted/50 border-muted focus:border-secondary"
            />
          </div>
        </div>

        <div class="space-y-2">
          <Label for="email" class="text-sm font-medium">Email</Label>
          <div class="relative">
            <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              v-model="email"
              type="email"
              placeholder="you@example.com"
              class="pl-10 bg-muted/50 border-muted focus:border-secondary"
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
              class="pl-10 pr-10 bg-muted/50 border-muted focus:border-secondary"
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

        <div class="space-y-2">
          <Label for="confirmPassword" class="text-sm font-medium">Confirm Password</Label>
          <div class="relative">
            <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              v-model="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="••••••••"
              class="pl-10 bg-muted/50 border-muted focus:border-secondary"
            />
          </div>
        </div>

        <Button
          type="submit"
          :disabled="isLoading"
          class="w-full gradient-accent text-white font-medium h-11 shadow-lg hover:shadow-xl transition-all duration-200 glow-pink"
        >
          <template v-if="isLoading">
            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
            Creating account...
          </template>
          <template v-else>
            Create Account
          </template>
        </Button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-muted-foreground">
          Already have an account? 
          <NuxtLink 
            to="/login" 
            class="font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Sign in
          </NuxtLink>
        </p>
      </div>
    </CardContent>
  </Card>
</template>