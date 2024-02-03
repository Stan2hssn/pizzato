<template>
  <NuxtLink
    v-for="(link, index) in links"
    :key="index"
    :to="link.link"
    @mouseover="setHover(`${link.servizi}`, 1)"
    @mouseleave="setHover(`${link.servizi}`, 0)"
    class="relative w-full flex flex-col items-center text-secondary cursor-none">
    <Line />
    <div class="flex flex-row w-full text-details-md lg:text-details justify-between">
      <div>{{ link.servizi }}</div>
      <p>00{{ index + 1 }}</p>
      <div>{{ link.servizi }}</div>
    </div>

    <Banner :text="link.servizi" />

    <video
      class="aspect-square w-[60vw] h-full mt-16"
      :src="link.path"
      type="video/webm"
      loop
      muted
      autoplay></video>
  </NuxtLink>
</template>
<script lang="ts" setup>
import Arredobagno from "media/Arredobagno.webm"
import comfortAmbiente from "media/comfortAmbiente.webm"
import trattamentoAcqua from "media/trattamentoAcqua.webm"
import impiantistica from "media/impiantistica.webm"

function setHover(text: string, ref: number) {
  general.currentHover = text
  general.mouseOver = ref
}
const links = <{ servizi: string; link: string; path: string }[]>[
  {
    servizi: "Arredobagno",
    link: "/servizi/Arredobagno",
    path: Arredobagno,
  },
  {
    servizi: "Comfort Ambiente",
    link: "/servizi/comfortAmbiente",
    path: comfortAmbiente,
  },
  {
    servizi: "Trattamento Acqua",
    link: "/servizi/trattamentoAcqua",
    path: trattamentoAcqua,
  },
  {
    servizi: "Impiantistica",
    link: "/servizi/impiantistica",
    path: impiantistica,
  },
]
</script>
