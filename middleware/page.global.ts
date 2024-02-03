export default defineNuxtRouteMiddleware((to: any, from: any) => {
  if (to) {
    general.pathPage = to.meta.name
    general.indexPage = to.meta.key
  }

  if (!general.isPreloaderVisible && from) {
    from.meta.pageTransition.onLeave = (el: HTMLElement, done: Function) => {
      general.transitionStart = true
      general.transitionFinished = false
      general.isTransitioning = true

      const transitionProps = ref({ page: 0 })

      const tl = gsap.timeline()
      tl.to(transitionProps.value, {
        page: general.windowHeight / 2,
        duration: 1.5,
        ease: "power4.inOut",
        onStart() {
          document.body.style.overflow = "hidden"
          document.body.style.pointerEvents = "none"
        },
        onUpdate() {
          el.style.transform = `translateY(${-transitionProps.value.page}px)`
        },
        onComplete() {
          general.scrollLenis?.stop()
          done()
        },
      })
    }
  }

  if (to) {
    to.meta.pageTransition.onEnter = (el: HTMLElement, done: Function) => {
      const transitionProps = ref({ page: general.windowHeight / 2 })
      const tl = gsap.timeline()

      tl.to(transitionProps.value, {
        page: 0,
        duration: 1.5,
        ease: "power4.inOut",
        delay: 2,
        onStart() {
          general.transitionStart = false
          general.transitionFinished = true
          general.isTransitioning = false
          general.scrollLenis?.scrollTo(0, { immediate: true })
        },
        onUpdate() {
          el.style.transform = `translateY(${transitionProps.value.page}px)`
        },
        onComplete() {
          general.transitionStart = false
          general.transitionFinished = false
          general.isTransitioning = "reset"
          general.scrollLenis?.start()
          document.body.style.overflow = ""
          document.body.style.pointerEvents = ""
          done()
        },
      })
    }
  }
})
