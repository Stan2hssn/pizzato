<template>
  <div class="page relative min-h-[100svh]">
    <NuxtLayout :name="layout">
      <section class="page flex flex-col">{{ $route.name }}</section>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
  name: "Arredobagno",
  key: "005",
})
const layout = "custom"
</script>
