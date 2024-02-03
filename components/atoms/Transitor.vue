<template>
  <aside class="fixed grid grid-cols-4 w-screen h-screen z-50 pointer-events-none">
    <div
      v-for="(_, id) in 4"
      :ref="(el) => el && setChildrenRefs(el as HTMLElement, id)"
      class="h-[--height] bg-secondary"></div>
    <div
      class="absolute flex justify-between w-full items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-offset overflow-hidden">
      <p
        v-for="(info, id) in infos"
        :ref="(el) => el && setInfoRefs(el as HTMLElement, id)"
        class="text-menu text-white uppercase">
        {{ info }}
      </p>
    </div>
    <svg
      width="1796"
      height="219"
      viewBox="0 0 1796 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-v-15203b75=""
      class="absolute bottom-offset left-0 w-full px-offset pointer-events-none overflow-hidden"
      :ref="(el) => el && setLetterRefs(el as HTMLElement)"
      data-v-2eca91ae="">
      <path
        d="M5.13 3.97C4.07 3.97 3.08 4.29 2.26 4.85C0.9 5.77 0 7.33 0 9.11V209.77C0 211.06 0.49 212.23 1.28 213.13C2.22 214.21 3.59 214.91 5.13 214.91H75.38C78.22 214.91 80.52 212.61 80.52 209.77V153.98C80.52 151.15 82.82 148.85 85.66 148.85H175.78C196.58 148.85 213.43 146.5 226.96 142.31C263.61 130.98 275.87 106.2 275.87 78.25V73.72C275.87 34.87 253.75 3.97 175.79 3.97H5.13ZM85.65 96.12C82.81 96.12 80.52 93.82 80.52 90.98V61.85C80.52 59.01 82.82 56.71 85.66 56.71H166.15C185.15 56.71 192.8 63.8 192.8 75.99V76.84C192.8 88.46 184.58 96.12 166.15 96.12H85.65Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="0 3.9700000286102295"></path>
      <path
        d="M372.72 5.48C372.02 4.78 371.13 4.29 370.12 4.08C369.79 4.01 369.44 3.98 369.09 3.98H299.13C297.71 3.98 296.43 4.55 295.5 5.48C294.57 6.41 294 7.69 294 9.11V209.77C294 212.61 296.3 214.91 299.14 214.91H369.11C371.95 214.91 374.24 212.61 374.24 209.77V9.11C374.24 8.4 374.1 7.72 373.84 7.11C373.58 6.5 373.2 5.94 372.74 5.48H372.72Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="294 3.9800000190734863"></path>
      <path
        d="M644.94 157.35H524.96C523.4 157.35 521.92 156.64 520.95 155.42C519.18 153.2 519.54 149.97 521.76 148.2L646.74 48.32C647.96 47.35 648.67 45.87 648.67 44.31V9.11C648.67 6.27 646.37 3.97 643.53 3.97H402.89C401.47 3.97 400.19 4.54 399.26 5.47C398.33 6.4 397.76 7.68 397.76 9.1V54.4C397.76 55.82 398.34 57.1 399.26 58.03C400.18 58.96 401.47 59.53 402.89 59.53H516.28C517.8 59.53 519.25 60.21 520.22 61.37C522.04 63.55 521.75 66.79 519.57 68.6L397.89 170.25C396.72 171.23 396.05 172.67 396.05 174.19V209.75C396.05 212.59 398.35 214.89 401.19 214.89H644.95C647.79 214.89 650.09 212.59 650.09 209.75V162.46C650.09 159.62 647.79 157.32 644.95 157.32L644.94 157.35Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="396.04998779296875 3.9700000286102295"></path>
      <path
        d="M915.4 157.35H795.42C793.86 157.35 792.38 156.64 791.41 155.42C789.64 153.2 790 149.97 792.22 148.2L917.19 48.32C918.41 47.35 919.12 45.87 919.12 44.31V9.11C919.12 8.4 918.98 7.73 918.72 7.11C918.46 6.5 918.08 5.94 917.62 5.48C916.69 4.55 915.41 3.98 913.99 3.97H673.35C671.93 3.97 670.65 4.54 669.72 5.47C668.79 6.4 668.22 7.68 668.22 9.1V54.4C668.22 55.82 668.8 57.1 669.72 58.03C670.64 58.96 671.93 59.53 673.35 59.53H786.74C787.5 59.53 788.24 59.7 788.91 60.01C789.25 60.17 789.57 60.36 789.86 60.59C790.16 60.82 790.43 61.08 790.67 61.37C792.49 63.55 792.2 66.79 790.02 68.6L668.34 170.25C667.17 171.23 666.5 172.67 666.5 174.19V209.75C666.5 212.59 668.8 214.89 671.64 214.89H915.4C918.24 214.89 920.54 212.59 920.54 209.75V162.46C920.54 159.62 918.24 157.32 915.4 157.32V157.35Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="666.5 3.9700000286102295"></path>
      <path
        d="M1153.24 7.91C1151.97 5.49 1149.47 3.97 1146.74 3.97H1047.44C1044.64 3.97 1042.09 5.55 1040.85 8.06L943.78 204.31C943.28 205.32 943.02 206.44 943.02 207.57C943.02 211.62 946.3 214.91 950.36 214.91H1015.55C1018.39 214.91 1020.97 213.27 1022.18 210.72L1034.36 185.08C1035.58 182.52 1038.16 180.88 1040.99 180.89H1152.24C1155.06 180.89 1157.62 182.5 1158.85 185.03L1171.28 210.76C1172.51 213.3 1175.08 214.91 1177.89 214.91H1249.35C1250.53 214.91 1251.69 214.62 1252.74 214.07C1256.33 212.19 1257.72 207.76 1255.85 204.17L1153.24 7.91ZM1097.07 132.46C1076.57 132.46 1059.95 119.81 1059.95 104.21C1059.95 103.7 1059.97 103.19 1060.01 102.68V102.59C1060.02 102.44 1060.03 102.29 1060.05 102.13C1060.05 102.03 1060.05 101.93 1060.08 101.82C1060.1 101.65 1060.12 101.49 1060.14 101.32C1060.97 94.76 1066.35 77.59 1097.07 50.86H1097.08C1097.08 50.86 1132.76 78.52 1134.15 102.76C1134.17 102.9 1134.17 103.04 1134.17 103.18C1134.19 103.53 1134.2 103.87 1134.2 104.21C1134.2 119.81 1117.58 132.46 1097.07 132.46Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="943.02001953125 3.9700000286102295"></path>
      <path
        d="M1463.98 3.97H1211.72C1208.88 3.97 1206.58 6.27 1206.58 9.11V56.39C1206.58 59.23 1208.88 61.53 1211.72 61.53H1292.46C1295.3 61.53 1297.59 63.83 1297.59 66.67V209.77C1297.59 212.61 1299.89 214.91 1302.73 214.91H1372.98C1375.82 214.91 1378.11 212.61 1378.11 209.77V66.66C1378.11 65.95 1378.25 65.27 1378.51 64.66C1378.77 64.05 1379.15 63.49 1379.61 63.03C1380.07 62.57 1380.63 62.19 1381.24 61.93C1381.85 61.67 1382.53 61.53 1383.24 61.53H1463.98C1465.4 61.53 1466.68 60.96 1467.61 60.03C1468.54 59.1 1469.11 57.82 1469.11 56.4V9.11C1469.11 6.27 1466.81 3.97 1463.97 3.97H1463.98Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="1206.5799560546875 3.9700000286102295"></path>
      <path
        d="M1642.33 0H1629.57C1573.83 0 1537.96 10.8 1515.01 26.29C1481.69 48.77 1475.62 81.12 1475.62 104.62V113.13C1475.62 134.07 1480.5 162.6 1505.57 184.76C1527.68 204.31 1565.51 218.89 1629.57 218.89H1642.33C1778.7 218.89 1796 152.54 1796 113.14V104.63C1796 64.94 1778.42 0.01 1642.33 0.01V0ZM1558.98 110V106.6C1558.98 84.2 1572.3 56.7 1635.81 56.7C1676.74 56.7 1697.04 68.54 1706.16 83.01C1710.93 90.59 1712.64 98.89 1712.64 106.59V110.56C1712.64 121.19 1709.47 133.13 1699.67 142.82C1688.56 153.8 1668.95 161.88 1635.82 161.88C1585.28 161.88 1566.2 142.33 1560.78 123.15C1559.51 118.66 1558.99 114.19 1558.99 109.99L1558.98 110Z"
        fill="#f2f1e4"
        data-v-15203b75=""
        style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px"
        data-svg-origin="1475.6199951171875 0"></path>
    </svg>
  </aside>
</template>
<script lang="ts" setup>
const childrenRef = ref<HTMLElement[]>([])
const infoRefs = ref<HTMLElement[]>([])
const letterRef = ref<SVGPathElement[]>([])

const infos = reactive({
  0: computed(() => general.indexPage),
  1: computed(() => general.pathPage),
  3: "Loading",
})

const setLetterRefs = (el: HTMLElement) => {
  if (el) {
    letterRef.value = [...el.querySelectorAll<SVGPathElement>("path")]
  }
}

const setChildrenRefs = (el: HTMLElement, index: number) => {
  if (el) {
    childrenRef.value[index] = el // Store the ref for each child
  }
}

const setInfoRefs = (el: HTMLElement, index: number) => {
  if (el) {
    infoRefs.value[index] = el // Store the ref for each child
  }
}

onMounted(() => {
  setAnimation(childrenRef.value, letterRef.value, infoRefs.value)

  watch(
    () => general.isTransitioning,
    () => {
      if (general.transitionStart && !general.transitionFinished) {
        AnimationBegin(childrenRef.value, letterRef.value, infoRefs.value)
      } else if (!general.transitionStart && general.transitionFinished) {
        AnimationEnd(childrenRef.value, letterRef.value, infoRefs.value)
      } else {
        setAnimation(childrenRef.value, letterRef.value, infoRefs.value)
      }
    }
  )
})
</script>
