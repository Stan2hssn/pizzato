export const useMenu = () => {
  const menuActive = useState<boolean>("menuActive", () => false)

  function setMenuActive(value: boolean) {
    menuActive.value = value
  }

  return { menuActive, setMenuActive }
}
