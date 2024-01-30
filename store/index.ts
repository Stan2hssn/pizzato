import { reactive } from "vue"
import Lenis from "@studio-freight/lenis"

interface GeneralStore {
  scrollLenis: Lenis | null
  currentHover: string | null
  mouseOver: number
  headerTranslate: number
  menuActive: boolean
}

export const general: GeneralStore = reactive({
  scrollLenis: null,
  mouseOver: 0,
  currentHover: null,
  headerTranslate: -200,
  menuActive: false,
})
