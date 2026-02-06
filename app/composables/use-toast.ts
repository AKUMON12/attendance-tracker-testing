// app/composables/useToast.ts
export interface ToastProps {
    title?: string
    description?: string
    action?: () => void
    open?: boolean
}

interface ToasterToast extends ToastProps {
    id: string
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

export const useToast = () => {
    const toasts = useState<ToasterToast[]>('toasts', () => [])
    const timeoutMap = new Map<string, ReturnType<typeof setTimeout>>()

    const genId = () => Math.random().toString(36).substring(2, 9)

    const addToast = (props: ToastProps) => {
        const id = genId()
        const toast: ToasterToast = {
            ...props,
            id,
            open: true
        }

        toasts.value = [toast, ...toasts.value].slice(0, TOAST_LIMIT)

        return {
            id,
            dismiss: () => dismiss(id),
            update: (newProps: Partial<ToastProps>) => update(id, newProps)
        }
    }

    const update = (id: string, newProps: Partial<ToastProps>) => {
        toasts.value = toasts.value.map(t =>
            t.id === id ? { ...t, ...newProps } : t
        )
    }

    const dismiss = (id?: string) => {
        if (id) {
            addToRemoveQueue(id)
            toasts.value = toasts.value.map(t =>
                t.id === id ? { ...t, open: false } : t
            )
        } else {
            toasts.value.forEach(t => addToRemoveQueue(t.id))
            toasts.value = toasts.value.map(t => ({ ...t, open: false }))
        }
    }

    const addToRemoveQueue = (id: string) => {
        if (timeoutMap.has(id)) return
        const timeout = setTimeout(() => {
            timeoutMap.delete(id)
            remove(id)
        }, TOAST_REMOVE_DELAY)
        timeoutMap.set(id, timeout)
    }

    const remove = (id?: string) => {
        if (!id) {
            toasts.value = []
        } else {
            toasts.value = toasts.value.filter(t => t.id !== id)
        }
    }

    return {
        toasts,
        addToast,
        update,
        dismiss,
        remove
    }
}
