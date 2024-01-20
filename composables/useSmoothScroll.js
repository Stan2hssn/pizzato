import Lenis from '@studio-freight/lenis'

export function useSmoothScroll(scroller) {
    const scrollLenis = new Lenis({
        duration: 1,
    })

    scroller ? scrollLenis.start() : scrollLenis.stop()

    gsap.ticker.add((time)=>{
		scrollLenis.raf(time * 1000)
	} )

	gsap.ticker.lagSmoothing(0)

    return {
        scrollLenis
    }
}