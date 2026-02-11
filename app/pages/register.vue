<script setup lang="ts">
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from 'lucide-vue-next'

// REMOVED manual imports of Card, Button, etc. 
// Nuxt auto-imports these from app/components/ui/

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
      variant: 'destructive', 
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
      variant: 'success'
    })
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