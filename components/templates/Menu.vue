<template>
  <aside
    data-lenis-prevent
    ref="menu"
    :style="{ transform: `translateY(${menuTranslate}%)` }"
    class="fixed lg:flex lg:flex-col items-stretch top-0 left-0 w-screen h-[--height] bg-secondary px-offset z-40 overflow-x-hidden overflow-y-scroll no-scrollbar">
    <Header theme="dark" />
    <Footer theme="dark" />
  </aside>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from "vue"

const props = defineProps<{
  isActive?: boolean
}>()

const active = computed(() => props.isActive || false)
const menuTranslate = ref<number>(-100)

// Define a plain JavaScript object for GSAP to animate
const animationProps = { translate: -100 }

let tl: gsap.core.Timeline
onMounted(() => {
  // Create a GSAP timeline
  tl = gsap
    .timeline({
      paused: true,
      defaults: { duration: 1.5, ease: "power4.inOut" },
    })
    .fromTo(
      animationProps,
      { translate: -100 },
      {
        translate: 0,
        onUpdate: () => {
          menuTranslate.value = animationProps.translate
        },
      }
    )
})

watch(active, () => {
  if (active.value) {
    tl.play()
  } else {
    tl.reverse()
  }
})
</script>
