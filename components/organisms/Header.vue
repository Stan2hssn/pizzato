<template>
  <Navbar :theme="theme" />
  <section class="relative flex flex-col z-10">
    <Line :theme="theme" />
    <HeadLine :theme="theme" />
  </section>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    theme?: string
  }>(),
  {
    theme: "light" || "dark",
  }
)
</script>
