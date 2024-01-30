<template>
  <a
    v-if="!external && !footer"
    :href="link"
    @mouseenter="handleMouseEnter()"
    @mouseleave="general.mouseOver = 0"
    class="w-fit cursor-none relative flex flex-col font-sans font-light py-0.5 overflow-hidden transition-transform duration-600 ease-in-out group">
    <span v-for="(i, id) in 2" :key="i" :class="className[id]">
      {{ name }}
    </span>
  </a>
  <a
    v-if="footer"
    :href="link"
    class="w-fit text-nowrap relative flex flex-col font-sans font-light py-0.5 overflow-hidden transition-transform duration-600 ease-in-out group">
    <span v-for="(i, id) in 2" :key="i" :class="className[id]">
      {{ name }}
    </span>
  </a>
  <a v-if="external" :href="link" class="underline">{{ name }}</a>
</template>
<script lang="ts" setup>
function handleMouseEnter() {
  general.mouseOver = 2
  general.currentHover = "link"
}

withDefaults(
  defineProps<{
    name?: string
    external?: boolean
    footer?: boolean
    link?: string
  }>(),
  {
    name: "Click me!",
    external: false,
    footer: false,
    link: "#",
  }
)

const className = {
  0: "leading-[3.8rem] group-hover:-translate-y-full duration-600 ease-in-out",
  1: "absolute leading-[3.8rem] absolute translate-y-full group-hover:translate-y-0 duration-600 ease-in-out",
} as Record<number, string>
</script>
