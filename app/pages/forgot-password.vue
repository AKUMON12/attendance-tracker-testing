<script setup lang="ts">
import { Mail, ArrowLeft, Loader2 } from 'lucide-vue-next'

definePageMeta({
  layout: 'auth'
})

const email = ref('')
const isLoading = ref(false)
const isSubmitted = ref(false)

const { addToast } = useToast()
const { resetPassword } = useAuth()

const handleSubmit = async () => {
  if (!email.value) {
    addToast({
      title: 'Error',
      description: 'Please enter your email address',
      variant: 'destructive',
    })
    return
  }

  isLoading.value = true
  try {
    await resetPassword(email.value)
    isSubmitted.value = true
    addToast({
      title: 'Reset Link Sent',
      description: 'Check your email for password reset instructions.',
      variant: 'success'
    })
  } catch (error) {
    addToast({
      title: 'Request Failed',
      description: 'Unable to send reset link. Please try again.',
      variant: 'destructive',
    })
  } finally {
    isLoading.value = false
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
        Reset Password
      </CardTitle>
      <CardDescription class="text-muted-foreground">
        Enter your email to receive reset instructions
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <div v-if="!isSubmitted">
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

          <Button
            type="submit"
            :disabled="isLoading"
            class="w-full gradient-primary text-primary-foreground font-medium h-11 shadow-lg hover:shadow-xl transition-all duration-200 glow-blue"
          >
            <template v-if="isLoading">
              <Loader2 class="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </template>
            <template v-else>
              Send Reset Link
            </template>
          </Button>
        </form>

        <div class="mt-6 text-center">
          <NuxtLink 
            to="/login" 
            class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft class="w-4 h-4 mr-1" />
            Back to Sign In
          </NuxtLink>
        </div>
      </div>

      <div v-else class="text-center py-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <Mail class="w-8 h-8 text-green-600" />
        </div>
        <h3 class="text-lg font-semibold text-foreground mb-2">Check Your Email</h3>
        <p class="text-muted-foreground mb-4">
          We've sent password reset instructions to<br>
          <span class="font-medium">{{ email }}</span>
        </p>
        <p class="text-sm text-muted-foreground">
          Didn't receive the email? Check your spam folder or
          <button 
            @click="isSubmitted = false"
            class="text-primary hover:text-primary/80 transition-colors"
          >
            try again
          </button>
        </p>
      </div>
    </CardContent>
  </Card>
</template>
