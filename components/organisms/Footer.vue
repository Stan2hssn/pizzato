<template>
  <section
    :class="[
      'flex flex-col font-sans w-full',
      theme == 'dark' ? '*:text-primary mt-auto  justify-end' : '*:text-secondary',
    ]">
    <Line />

    <div class="grid grid-rows-1 lg:grid-cols-footerInner gap-[--gutter] w-full">
      <template v-for="(sectionItems, sectionTitle, id) in computedData">
        <div
          :class="[
            'flex flex-col gap-2 pb-offset lg:pb-0 h-full border-b border-primary',
            id == 2 ? 'lg:border-b-0' : 'lg:border-r lg:border-b-0',
          ]">
          <h3 class="uppercase text-h3 lg:text-h3-lg">{{ sectionTitle }}</h3>
          <ul class="flex flex-col">
            <li
              v-for="(item, index) in sectionItems"
              :key="`${sectionTitle}-${index}`"
              class="w-fit text-body flex-nowrap">
              <LinkItem :name="item.toString()" />
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="flex flex-col w-full py-offset text-sm">
      <Line />

      <div class="flex flex-row items-center justify-between gap-offset w-full h-full cursor-pointer">
        <div class="flex items-center now gap-1">
          <p class="text-nowrap">© 2024</p>
          <LinkItem :footer="true" name="Privacy Policy" />
        </div>
        <p v-if="theme == 'light'" class="text-center text-[.7rem]">
          Ai sensi e per gli effetti dell'art. 3 quater comma 2 del DL 135/2018 gli aiuti di stato e gli aiuti
          de minimis riconosciuti alla società sono rinvenibili anche nella apposita sezione “Trasparenza” del
          <LinkItem name=" sito nazionale degli aiuti di stato." :external="true" />
        </p>
        <div class="flex flex-row-reverse cursor-pointer">
          <LinkItem :footer="true" name="Credit" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    theme?: string
  }>(),
  {
    theme: "light" || "dark",
  }
)

const theme = computed(() => props.theme || "light")

interface DataStructure {
  [key: string]: string[]
}

const datas: DataStructure = {
  recap: ["About", "Showroom", "Contatti"],
  SERVIZI: ["Arredobagno", "Comfort Ambiente", "Trattamento Acqua", "Impiantistica"],
}

const computedData = computed(() => {
  if (props.theme === "dark") {
    return {
      ...datas,
      INDIRIZZO_MENU: ["T. 045 545063", "M. pizzatoits@pizzatoits.it", "IG. @pizzato_its"],
    }
  } else {
    return {
      ...datas,
      INDIRIZZO: ["Via IV Novembre, 100 . 37057 . San Giovanni Lupatoto . Verona"],
    }
  }
})
</script>
