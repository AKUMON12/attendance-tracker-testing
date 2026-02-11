import { ref } from "vue"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  action?: any
  variant?: 'default' | 'destructive' | 'success';
}

const toasts = ref<Toast[]>([])

function addToast(toastData: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2)
  toasts.value.push({ id, ...toastData })
  // auto-remove after 5s
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 5000)
}

export function useToast() {
  return {
    toasts,
    addToast,
  }
}
