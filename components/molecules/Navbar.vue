<template>
  <Slogan :theme="theme" />

  <header class="sticky flex top-0 w-full h-24 items-center z-50 overflow-hidden">
    <div
      :style="{ transform: `translateY(${general.headerTranslate}%)` }"
      class="w-full flex flex-row justify-between">
      <Button v-if="theme == 'light'" name="Menu" :theme="theme" />
      <Button v-else name="Chiudi" :theme="theme" />
      <Button name="Contatti" :theme="theme" />
    </div>
  </header>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    theme?: string
  }>(),
  {
    theme: "light",
  }
)
</script>
