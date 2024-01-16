<template>
  <button
    type="button"
    class="relative flex flex-col font-sans font-light text-secondary bg-white bg-opacity-70 hover:bg-secondary hover:bg-opacity-100 border-secondary border rounded-full backdrop-blur-sm overflow-hidden transition-colors duration-600 ease-in-out group">
    <span
      class="text-menu font-thin text-secondary px-7 py-2 group-hover:-translate-y-full duration-600 ease-in-out">
      {{ name }}
    </span>
    <span
      class="absolute text-menu font-thin text-white translate-y-full px-7 py-2 group-hover:translate-y-0 duration-600 ease-in-out"
      >{{ name }}</span
    >
  </button>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "Click me!",
  },
})
</script>
