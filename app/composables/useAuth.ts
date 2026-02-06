// app/composables/useAuth.ts
import { useFetch } from '#app'

interface User {
    id: string
    email: string
    name: string
    role: 'user' | 'admin'
}

export const useAuth = () => {
    // Shared state across app (SSR-safe)
    const user = useState<User | null>('auth_user', () => null)
    const isLoading = useState<boolean>('auth_loading', () => true)

    // Restore session on mount
    onMounted(() => {
        const token = localStorage.getItem('auth_token')
        const storedUser = localStorage.getItem('user')

        if (token && storedUser) {
            try {
                user.value = JSON.parse(storedUser)
            } catch {
                localStorage.removeItem('auth_token')
                localStorage.removeItem('user')
            }
        }
        isLoading.value = false
    })

    // Login
    const login = async (email: string, password: string) => {
        isLoading.value = true
        try {
            // Example API call (replace with real one)
            // const { data } = await useFetch('/api/auth/login', {
            //   method: 'POST',
            //   body: { email, password }
            // })

            await new Promise(resolve => setTimeout(resolve, 1000))

            const mockUser: User = {
                id: '1',
                email,
                name: email.split('@')[0],
                role: email.includes('admin') ? 'admin' : 'user'
            }

            const mockToken = 'mock_jwt_token_' + Date.now()

            localStorage.setItem('auth_token', mockToken)
            localStorage.setItem('user', JSON.stringify(mockUser))
            user.value = mockUser
        } finally {
            isLoading.value = false
        }
    }

    // Register
    const register = async (email: string, password: string, name: string) => {
        isLoading.value = true
        try {
            // Example API call
            // await useFetch('/api/auth/register', {
            //   method: 'POST',
            //   body: { email, password, name }
            // })

            await new Promise(resolve => setTimeout(resolve, 1000))

            const mockUser: User = {
                id: Date.now().toString(),
                email,
                name,
                role: 'user'
            }

            const mockToken = 'mock_jwt_token_' + Date.now()

            localStorage.setItem('auth_token', mockToken)
            localStorage.setItem('user', JSON.stringify(mockUser))
            user.value = mockUser
        } finally {
            isLoading.value = false
        }
    }

    // Logout
    const logout = () => {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
        user.value = null
    }

    // Reset password
    const resetPassword = async (email: string) => {
        // Example API call
        // await useFetch('/api/auth/reset-password', {
        //   method: 'POST',
        //   body: { email }
        // })

        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    return {
        user,
        isAuthenticated: computed(() => !!user.value),
        isAdmin: computed(() => user.value?.role === 'admin'),
        isLoading,
        login,
        register,
        logout,
        resetPassword
    }
}
