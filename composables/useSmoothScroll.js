import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function useSmoothScroll() {

    const lenis = new Lenis({
        duration: 1,
        easing: (t) => {return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2},
        lerp : 0.1,
        smoothwheel: true,
    })
    
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
}

    