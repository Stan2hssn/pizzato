import { reactive } from "vue"
import Lenis from "@studio-freight/lenis"

interface GeneralStore {
  scrollLenis: Lenis | null
  isPreloaderVisible: boolean
  isTransitioning: string | boolean
  currentHover: string | null
  mouseOver: number
  headerTranslate: number
  menuActive: boolean
  windowHeight: number
  transitionStart: boolean
  transitionFinished: boolean
  indexPage: number
  pathPage: string
}

export const general: GeneralStore = reactive({
  scrollLenis: null,
  isPreloaderVisible: true,
  isTransitioning: false,
  mouseOver: 0,
  currentHover: null,
  headerTranslate: -200,
  menuActive: false,
  windowHeight: window.innerHeight,
  transitionStart: false,
  transitionFinished: false,
  indexPage: 0,
  pathPage: "Home",
})
