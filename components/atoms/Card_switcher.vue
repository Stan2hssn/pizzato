<template>
  <div
    class="grid grid-cols-3 gap-10 justify-between w-full h-auto pb-10 overflow-hidden border-b border-secondary">
    <div
      v-for="(source, id) in sources"
      :key="id"
      @click="active = id"
      @mouseover="setHover('Click!', 1)"
      @mouseleave="setHover('Click!', 0)"
      :class="[
        'relative flex w-full rounded-3xl overflow-hidden z-10 duration-1000 ease-in-out hover:cursor-none group',
        getTranslateClass(id),
      ]">
      <img
        :src="source"
        alt="images of the company"
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-600 ease-in-out" />
      <div
        class="absolute top-0 left-0 w-full h-full z-10 bg-filter mix-blend-hard-light group-hover:opacity-0 duration-600 ease-in-out"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import Rubinet from "images/01_Rubinet.webp"
import Bagno from "images/02_Bagno.webp"
import Bagno2 from "images/03_Bagno_2.webp"

function setHover(text: string, ref: number) {
  general.mouseOver = ref
  general.currentHover = text
}

const className = {
  main: "translate-y-1/3 hover:translate-y-1/3",
  active: "translate-y-0 hover:translate-y-0",
  default: "translate-y-1/2 hover:translate-y-1/3",
}

const active = ref<number | null>(null)

function getTranslateClass(id: number) {
  if (id == active.value) {
    return className.active
  } else if (id == 1 && active.value == null) {
    return className.main
  } else {
    return className.default
  }
}

const sources = [Rubinet, Bagno, Bagno2]
</script>
