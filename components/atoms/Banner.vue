<template>
    <div class="absolute top-0 flex flex-row w-full text-secondary -z-10">
        <h2
            v-for="_ in 3"
            class="flex font-pd text-h2 whitespace-nowrap animate-title uppercase"
        >
            &nbsp{{ text }} —
        </h2>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    text: string
}>()
</script>
