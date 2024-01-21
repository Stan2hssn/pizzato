<template>
  <p class="flex flex-wrap gap-2 font-sans text-body text-secondary my-sp90">
    <span v-for="(word, index) in words" :key="wordKeys[index]" class="flex -mb-6">
      {{ word.text }}
    </span>
  </p>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue"
import { useSlots } from "vue"

const slotContent = ref("")
const words = ref<{ text: string; key: string }[]>([])
const wordKeys = ref<string[]>([])

// Helper function to create a unique key for each word
const createUniqueKey = (word: string, index: number) => {
  return `${word}_${index}_${new Date().getTime()}`
}

// We use watchEffect to react to changes in slot content
watchEffect(() => {
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
</script>
