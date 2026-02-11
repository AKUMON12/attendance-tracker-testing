// app/composables/useToast.ts
import { ref } from "vue"

export interface ToastProps {
    id: string
    title?: string
    description?: string
    action?: any
    variant?: 'default' | 'destructive' | 'success'
    open?: boolean
}

// State stays outside the function so it's shared globally
const toasts = ref<ToastProps[]>([])

export const useToast = () => {
    const addToast = (toastData: Omit<ToastProps, "id">) => {
        const id = Math.random().toString(36).slice(2)
        const newToast = { id, open: true, ...toastData }

        toasts.value.push(newToast as ToastProps)

        // Auto-remove after 5 seconds
        setTimeout(() => {
            removeToast(id)
        }, 5000)
    }

    const removeToast = (id: string) => {
        toasts.value = toasts.value.filter((t) => t.id !== id)
    }

    return {
        toasts,
        addToast,
        removeToast
    }
}