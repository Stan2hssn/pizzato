import Lenis from "@studio-freight/lenis"

export const useSmoothScroll = (scroller: boolean) => {
  general.scrollLenis = new Lenis({
    duration: 1,
    smoothTouch: true,
  })

  scroller ? general.scrollLenis.start() : general.scrollLenis.stop()

  gsap.ticker.add((time) => {
    if (general.scrollLenis) {
      general.scrollLenis.raf(time * 1000)
    }
  })

  gsap.ticker.lagSmoothing(0)
  general.scrollLenis?.scrollTo(0)
}
