<template>
  <div id="app" class="h-[--height]">
    <Cursor />
    <Menu :isActive="menuActive" />

    <ThePreloader>
      <slot />
    </ThePreloader>
  </div>
</template>

<script setup>
const { menuActive } = useMenu()
</script>
