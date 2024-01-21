<template>
  <div
    v-if="show"
    :style="{
      transform: `translateY(${loadTranslate}%)`,
    }"
    class="flex items-center justify-center w-screen h-screen">
    <img
      :style="{
        transform: `scale(${elScale})`,
      }"
      :src="source" />
  </div>

  <div v-if="show" ref="slogan" class="absolute flex top-0 w-full h-24 justify-center items-center opacity-0">
    <p class="relative text-center leading-[.9rem] text-slogan text-secondary py-2">
      FORNITURE IDRAULICHE E TERMOSANITARIE. <br />
      ARREDOBAGNO.
    </p>
  </div>
  <div
    id="view"
    :style="{ transform: `translateY(${mainTranslate}%)` }"
    class="relative w-full h-screen items-center px-offset">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import source from "gif/Load.gif"

import { ref, onMounted } from "vue"

// Reactive reference for the CSS variable value
const FIRST_DURATION = 1.5
const SECOND_DURATION = 1

const loadTranslate = ref<number>(100)
const show = ref<boolean>(true)
const mainTranslate = ref<number>(0)
const slogan = ref<HTMLElement | null>(null)
const windowHeight = ref<number>(0)
const sloganHeight = ref<number>(0)
const offset = ref<number>(0)
const headerTranslate = useHeaderTranslate()

const elScale = ref<number>(0.5)

const animationProps = <{ translate: number; mainTranslate: number; headerTranslate: number; scale: number }>{
  translate: 100,
  mainTranslate: 0,
  headerTranslate: -200,
  scale: 0.5,
}

onMounted(() => {
  setupAnimation()
})

function setupAnimation() {
  useSmoothScroll(false)

  windowHeight.value = window.innerHeight
  sloganHeight.value = slogan.value?.offsetHeight ?? 0
  offset.value = (sloganHeight.value / windowHeight.value) * 100

  const tl = gsap.timeline()

  const customEase = CustomEase.create("in", "M0,0 C0.299,0 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1 ")

  tl.to(animationProps, {
    duration: FIRST_DURATION,
    ease: "power4.out",
    translate: 0,
    scale: 0.8,
    onStart: () => {
      window.scrollTo(0, 0)
    },
    onUpdate: () => {
      loadTranslate.value = animationProps.translate
      elScale.value = animationProps.scale
    },
  })
    .to(
      animationProps,
      {
        duration: SECOND_DURATION,
        ease: "power4.out",
        mainTranslate: -offset.value,
        onUpdate: () => {
          mainTranslate.value = animationProps.mainTranslate
        },
      },
      "-=.5"
    )
    .to(animationProps, {
      duration: FIRST_DURATION,
      translate: -200,
      mainTranslate: -100,
      ease: customEase,
      delay: 0.5,
      onUpdate: () => {
        loadTranslate.value = animationProps.translate
        mainTranslate.value = animationProps.mainTranslate
      },
    })
    .to(
      animationProps,
      {
        duration: SECOND_DURATION,
        headerTranslate: 0,
        ease: "power3.out",
        delay: 0.1,
        onUpdate: () => {
          headerTranslate.value = animationProps.headerTranslate
        },
      },
      "-=.9"
    )
    .to(animationProps, {
      duration: 0,
      delay: 0.1,
      onUpdate: () => {
        show.value = false
        mainTranslate.value = 0
      },
      onComplete: () => {
        useSmoothScroll(true)
      },
    })
}
</script>
