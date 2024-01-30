<template>
  <p ref="container" class="flex flex-wrap gap-2 gap-y-0 font-sans text-body text-secondary my-sp90">
  <div v-for="(word, index) in words" :key="wordKeys[index]" class="flex overflow-hidden">
    <span :ref="(el) => el && setChildRef(el as HTMLElement, index)" class="translate-y-full py-1">
      {{ word.text }}
    </span>
  </div>
  </p>
</template>


<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { useSlots } from "vue"

const slotContent = ref("")
const words = ref<{ text: string; key: string }[]>([])
const wordKeys = ref<string[]>([])
const container = ref<HTMLElement | null>(null);

const childrenRefs = ref<HTMLElement[]>([]);

const setChildRef = (el: HTMLElement, index: number) => {
  if (el) {
    childrenRefs.value[index] = el; // Store the ref for each child
  }
};

onMounted(() => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // The container is entering the viewport, animate the children
        childrenRefs.value.forEach((child, i) => {
          if (child) {
            gsap.to(child, {
              y: 0, // End position
              opacity: 1,
              duration: 1,
              delay: + i * 0.01, // Stagger the animations
              ease: "power4.out",
            });
          }
        });
      } else {
        // The container is leaving the viewport, reset the children
        childrenRefs.value.forEach((child) => {
          if (child) {
            gsap.to(child, {
              y: 100, // Starting position
              opacity: 0,
              duration: 1,
              ease: "power4.out",
            });
          }
        });
      }
    });
  }, { threshold: [0, 1] }); // Use multiple thresholds to detect entering and leaving

  if (container.value) {
    observer.observe(container.value);
  }

  slotContent.value = ""
  const slots = useSlots()
  if (slots.default) {
    const vnodes = slots.default()
    vnodes.forEach((vnode) => {
      if (typeof vnode.children === "string") {
        slotContent.value += vnode.children
      }
    })
  }
  // Use regex to split the content into words, handling spaces and line breaks
  const splitWords = slotContent.value.split(/\s+/).filter(Boolean)
  words.value = splitWords.map((word, index) => ({
    text: word,
    key: createUniqueKey(word, index),
  }))
  // Update the keys for each word
  wordKeys.value = words.value.map((word) => word.key)
})

// Helper function to create a unique key for each word
const createUniqueKey = (word: string, index: number) => {
  return `${word}_${index}_${new Date().getTime()}`
}
</script>
