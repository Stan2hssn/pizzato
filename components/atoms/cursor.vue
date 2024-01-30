<template>
  <div
    :style="{ top: `${y.valueOf}px`, left: `${x.valueOf}px` }"
    ref="cursor"
    class="fixed top-0 left-0 z-50 pointer-events-none">
    <div
      ref="cursorCircle"
      :class="[
        'absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-2 h-2 z-0 pointer-events-none scale-0 duration-150',
        menuActive ? 'bg-primary' : 'bg-secondary',
      ]"></div>
    <div
      ref="cursorText"
      class="flex w-fit -translate-x-1/2 -translate-y-1/2 font-sans font-light text-xl text-secondary bg-white bg-opacity-70 border-secondary border rounded-full backdrop-blur-sm px-4 py-2 scale-0 z-50">
      {{ general.currentHover }}
    </div>
    <div
      ref="cursorArrow"
      class="flex items-center justify-center -translate-x-1/2 -translate-y-full w-[6rem] h-[6rem] font-sans font-light text-xl text-secondary bg-[hsla(0,0%,100%,.3)] bg-opacity-70 rounded-full backdrop-blur-md scale-0 z-50">
      <svg
        data-v-682cd8f0=""
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon-arrow"
        style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px)">
        <path
          d="M14.061 1.98779L27.134 15.0608"
          :stroke="menuActive ? '#f2f1e4' : '#184DC4'"
          stroke-width="2"
          stroke-linecap="round"></path>
        <path
          d="M27.134 15.061L14.061 28.134"
          :stroke="menuActive ? '#f2f1e4' : '#184DC4'"
          stroke-width="2"
          stroke-linecap="round"></path>
        <path
          d="M26.789 15.0612H1.33311"
          :stroke="menuActive ? '#f2f1e4' : '#184DC4'"
          stroke-width="2"
          stroke-linecap="round"></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue"

const cursorCircle = ref<HTMLElement | null>(null)
const cursorText = ref<HTMLElement | null>(null)
const cursorArrow = ref<HTMLElement | null>(null)
const cursor = ref<HTMLElement | null>(null)

const { menuActive } = useMenu()
const { x, y } = useMouse()

let xTo: (value: number) => void
let yTo: (value: number) => void

onMounted(() => {
  xTo = gsap.quickTo(cursor.value, "x", { duration: 0.2, ease: "power3" })
  yTo = gsap.quickTo(cursor.value, "y", { duration: 0.2, ease: "power3" })
  enter(cursorCircle.value)
})

const enter = (element: HTMLElement | null) => {
  if (element) {
    gsap.to(element, { scale: 1, duration: 0.2, ease: "power1.inOut" })
  }
}

const leave = (element: HTMLElement | null) => {
  if (element) {
    gsap.to(element, { scale: 0, duration: 0.2, ease: "power1.inOut" })
  }
}

watch(
  () => general.mouseOver,
  (newVal) => {
    if (newVal === 0) {
      enter(cursorCircle.value)
      leave(cursorText.value)
      leave(cursorArrow.value)
    } else if (newVal === 1) {
      leave(cursorCircle.value)
      enter(cursorText.value)
      leave(cursorArrow.value)
    } else if (newVal === 2) {
      leave(cursorCircle.value)
      leave(cursorText.value)
      enter(cursorArrow.value)
    }
  }
)

watch([x, y], ([newX, newY]) => {
  if (xTo && yTo) {
    xTo(newX)
    yTo(newY)
  }
})
</script>
