<template>
  <div class="page relative min-h-[100svh]">
    <NuxtLayout :name="layout">
      <section class="page flex flex-col -mt-16">
        <CardSwitcher />
        <TextContainer
          >Arredobagno, impiantistica, trattamento dell’acqua e comfort ambiente: se quello che cerchi è un
          servizio completo, massima qualità e professionalità, sei nel posto giusto. Negli anni siamo
          diventati il punto di riferimento per privati e professionisti che cercano soluzioni personalizzate
          affidabili per l’ambiente domestico e aziendale.</TextContainer
        >
      </section>
      <HomeLinks />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  pageTransition: {
    name: "Home",
    mode: "out-in",
  },
  name: "Home",
  key: "001",
})
const layout = "custom"
</script>
