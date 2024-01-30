<template>
  <div class="absolute flex left-1/2 -translate-x-1/2 top-0 h-24 justify-center items-center">
    <p
      :class="[
        'relative text-center leading-[.9rem] text-details py-2',
        theme == 'dark' ? 'text-primary' : 'text-secondary',
      ]">
      FORNITURE IDRAULICHE E TERMOSANITARIE. <br />
      ARREDOBAGNO.
    </p>
  </div>
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
