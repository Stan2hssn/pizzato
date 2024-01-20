<template>
  <div
    v-if="show"
    :style="{
      transform: `translateY(${LoadTranslate}%)`,
    }"
    class="flex items-center justify-center w-screen h-screen">
    <img
      :style="{
        transform: `scale(${elScale})`,
      }"
      :src="source" />
  </div>
  <div
    id="view"
    :style="{ transform: `translateY(${headerTranslate}%)` }"
    class="relative w-full h-screen items-center px-offset">
    <slot />
  </div>
</template>

<script setup>
import source from "gif/Load.gif"

import { ref, onMounted } from "vue"

// Reactive reference for the CSS variable value
const LoadTranslate = ref(100)
const headerTranslate = ref(0)
const elScale = ref(0.5)
const show = ref(true)

const animationProps = {
  translate: 100,
  scale: 0.5,
}

onMounted(() => {
  const tl = gsap.timeline()
  const duration = 1.5

  tl.to(animationProps, {
    duration: duration,
    ease: "power4.out",
    translate: 0,
    scale: 0.8,
    onStart: () => {
      window.scrollTo(0, false)
      useSmoothScroll()
    },
    onUpdate: () => {
      LoadTranslate.value = animationProps.translate
      elScale.value = animationProps.scale
    },
  })
    .to(animationProps, {
      duration: duration,
      translate: -100,
      ease: CustomEase.create("in", "M0,0 C0.299,0 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1 "),
      delay: 0.5,
      onUpdate: () => {
        LoadTranslate.value = animationProps.translate
        headerTranslate.value = animationProps.translate
      },
    })
    .to(animationProps, {
      duration: 0,
      ease: "custom",
      delay: 0.1,
      onUpdate: () => {
        show.value = false
        headerTranslate.value = 0
      },
      onComplete: () => {
        useSmoothScroll(true)
      },
    })
})
</script>
