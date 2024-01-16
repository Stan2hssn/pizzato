<template>
  <p class="flex flex-wrap gap-2 font-sans text-body text-secondary my-sp90">
    <span v-for="(word, index) in words" :key="index" class="flex -mb-6">
      {{ word }}
    </span>
  </p>
</template>

<script setup>
import { ref, watchEffect } from "vue"

const slotContent = ref("")
const words = ref([])

// We use watchEffect to react to changes in slot content
watchEffect(() => {
  // Extracting text from the slot
  slotContent.value = ""
  const slots = useSlots()
  if (slots.default) {
    const vnodes = slots.default()
    vnodes.forEach((vnode) => {
      if (vnode.children) {
        slotContent.value += vnode.children
      }
    })
  }

  // Split the content into words
  words.value = slotContent.value.split(" ")
})
</script>
