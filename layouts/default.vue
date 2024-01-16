<template>
  <div id="viewport"></div>
  <slot />
</template>
<script setup>
onMounted(() => {
  useSmoothScroll()
})
</script>
