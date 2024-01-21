<template>
  <NuxtLayout :name="layout">
    <section class="flex flex-col -mt-16">
      <CardSwitcher />
      <TextContainer
        >Arredobagno, impiantistica, trattamento dell’acqua e comfort ambiente: se quello che cerchi è un
        servizio completo, massima qualità e professionalità, sei nel posto giusto. Negli anni siamo diventati
        il punto di riferimento per privati e professionisti che cercano soluzioni personalizzate affidabili
        per l’ambiente domestico e aziendale.</TextContainer
      >
    </section>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const layout = "custom"
</script>
