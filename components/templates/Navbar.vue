<template>
  <Slogan />

  <header class="sticky top-0 w-full z-50 overflow-hidden">
    <div :style="{ transform: `translateY(${translate}%)` }" class="flex flex-row justify-between py-offset">
      <Button name="Menu" />
      <Button name="Contatti" />
    </div>
  </header>
</template>
<script setup>
const translate = useHeaderTranslate()
</script>
