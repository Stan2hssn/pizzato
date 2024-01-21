<template>
  <Slogan />

  <header class="sticky flex top-0 w-full h-24 items-center z-50 overflow-hidden">
    <div :style="{ transform: `translateY(${translate}%)` }" class="w-full flex flex-row justify-between">
      <Button name="Menu" />
      <Button name="Contatti" />
    </div>
  </header>
</template>
<script setup>
const translate = useHeaderTranslate()
</script>
