<template>
  <div id="app">
    <Cursor />
    <Transitor />
    <Menu :isActive="menuActive" />

    <ThePreloader>
      <slot />
    </ThePreloader>
  </div>
</template>

<script setup>
const { menuActive } = useMenu()
</script>
