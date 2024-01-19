<template>
  <div id="viewport"></div>
  <ThePreloader>
    <slot />
  </ThePreloader>
</template>
<script setup>
onMounted(() => {
  useSmoothScroll()
})
</script>
