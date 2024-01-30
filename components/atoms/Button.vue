<template>
  <button v-if="name == 'Menu'" @click="setActive(true)" type="button" :class="themeColor[theme]">
    <span
      class="text-menu font-thin text-secondary px-7 py-2 group-hover:-translate-y-full duration-600 ease-in-out">
      {{ name }}
    </span>
    <span
      class="absolute text-menu font-thin text-white translate-y-full px-7 py-2 group-hover:translate-y-0 duration-600 ease-in-out"
      >{{ name }}</span
    >
  </button>

  <button v-else-if="name == 'Chiudi'" @click="setActive(false)" type="button" :class="themeColor[theme]">
    <span
      class="text-menu font-thin text-secondary px-7 py-2 group-hover:-translate-y-full duration-600 ease-in-out">
      {{ name }}
    </span>
    <span
      class="absolute text-menu font-thin text-white translate-y-full px-7 py-2 group-hover:translate-y-0 duration-600 ease-in-out"
      >{{ name }}</span
    >
  </button>

  <button v-else type="button" :class="themeColor[theme]">
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
<script lang="ts" setup>
withDefaults(
  defineProps<{
    name?: string
    theme?: string
  }>(),
  {
    name: "Click me!",
    theme: "light",
  }
)

const { setMenuActive } = useMenu()

function setActive(value: boolean) {
  setMenuActive(value)
}

const themeColor = {
  light:
    "relative flex flex-col font-sans font-light text-secondary bg-white bg-opacity-70 hover:bg-secondary hover:bg-opacity-100 border-secondary border rounded-full backdrop-blur-sm overflow-hidden transition-colors duration-600 ease-in-out group",
  dark: "relative flex flex-col font-sans font-light *:text-primary bg-[hsla(0,0%,100%,.2)] border-secondary border rounded-full overflow-hidden duration-600 ease-in-out group",
} as Record<string, string>
</script>
