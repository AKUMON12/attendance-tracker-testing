import { ref } from "vue"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  action?: any
  variant?: 'default' | 'destructive' | 'success'
}

// Use the name defined in the interface above
const toasts = ref<ToastProps[]>([])

// Use Omit to ensure we don't require an 'id' when calling addToast
function addToast(toastData: Omit<ToastProps, "id">) {
  const id = Math.random().toString(36).slice(2)
  toasts.value.push({ id, ...toastData } as ToastProps)

  // auto-remove after 5s
  setTimeout(() => {
    // 't' will now correctly be recognized as ToastProps
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 5000)
}

export function useToast() {
  return {
    toasts,
    addToast,
  }
}