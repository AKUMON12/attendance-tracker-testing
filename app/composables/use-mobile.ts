// app/composables/useMobile.ts
const MOBILE_BREAKPOINT = 768

export const useIsMobile = () => {
    const isMobile = ref(false)

    const update = () => {
        if (process.client) {
            isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
        }
    }

    // Initialize on client
    if (process.client) {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        update()
        mql.addEventListener('change', update)
        window.addEventListener('resize', update)

        // Cleanup on component unmount
        onUnmounted(() => {
            mql.removeEventListener('change', update)
            window.removeEventListener('resize', update)
        })
    }

    return isMobile
}

// Usage:
// <script setup lang = "ts" >
// const isMobile = useIsMobile()
//     </script>

//     < template >
//     <div>
//     <p v -if= "isMobile" > Mobile view </p>
//         < p v -else> Desktop view </p>
//             </div>
//             </template>
