import { createInjectionState } from '@vueuse/core'

const [useProvideCarousel, useInjectCarousel] = createInjectionState((props: any) => {
    return props
})

export { useProvideCarousel, useInjectCarousel }