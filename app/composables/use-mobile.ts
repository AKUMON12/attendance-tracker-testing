// app/composables/useMobile.ts
const MOBILE_BREAKPOINT = 768

export const useIsMobile = () => {
    const isMobile = ref(false)

    const update = () => {
        isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
    }

    onMounted(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        update()
        mql.addEventListener('change', update)
        window.addEventListener('resize', update)

        onUnmounted(() => {
            mql.removeEventListener('change', update)
            window.removeEventListener('resize', update)
        })
    })

    return isMobile
}
