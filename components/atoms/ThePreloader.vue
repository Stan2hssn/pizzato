<template>
  <div
    :style="{
      transform: `translateY(${elTranslate}%) scale(${elScale})`,
      display: `${elDisplay}`,
    }"
    class="flex items-center justify-center w-screen h-screen">
    <img :src="source" alt="" />
  </div>
  <main
    :style="{ transform: `translateY(${slotTranslate}%)` }"
    class="relative w-full h-[200vh] items-center px-offset">
    <slot />
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue"
import source from "gif/Load.gif"

// Reactive reference for the CSS variable value
const elTranslate = ref(100)
const slotTranslate = ref(0)
const elScale = ref(0.5)
const elDisplay = ref("flex")

const animationProps = {
  translate: 100,
  scale: 0.5,
  display: "flex",
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
    },
    onUpdate: () => {
      elTranslate.value = animationProps.translate
      elScale.value = animationProps.scale
    },
  })
    .to(animationProps, {
      duration: duration,
      translate: -100,
      ease: CustomEase.create("in", "M0,0 C0.299,0 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1 "),
      delay: 0.5,
      onUpdate: () => {
        elTranslate.value = animationProps.translate
        slotTranslate.value = animationProps.translate / 2
      },
    })
    .to(animationProps, {
      duration: 0,
      ease: "custom",
      display: "none",
      delay: 0.1,
      onUpdate: () => {
        elDisplay.value = animationProps.display
        slotTranslate.value = "0"
      },
      onComplete: () => {
        useSmoothScroll(true)
      },
    })
})
</script>
