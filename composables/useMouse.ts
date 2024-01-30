import { ref, onMounted, onUnmounted } from "vue"

export function useMouse() {
  const x = ref<number>(0)
  const y = ref<number>(0)

  const update = (e: MouseEvent) => {
    x.value = e.clientX
    y.value = e.clientY
  }
  onMounted(() => {
    window.addEventListener("mousemove", update)
  })
  onUnmounted(() => {
    window.removeEventListener("mousemove", update)
  })
  return { x, y }
}
