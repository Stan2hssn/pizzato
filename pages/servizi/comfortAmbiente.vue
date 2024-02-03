<template>
  <div class="page relative min-h-[100svh]">
    <NuxtLayout :name="layout">
      <section class="page flex flex-col -mt-16">{{ $route.name }}</section>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
  name: "Comfort Ambiente",
  key: "006",
})
const layout = "custom"
</script>
