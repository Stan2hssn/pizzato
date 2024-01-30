<template>
  <hr v-if="theme == 'light'" class="w-full h-[1px] bg-secondary mb-6" />
  <hr v-else class="w-full h-[1px] bg-primary mb-6" />
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
