function setAnimation(
  firstChildren: HTMLElement[],
  secondChildren: SVGPathElement[],
  thirdChildren: HTMLElement[]
) {
  gsap.killTweensOf(firstChildren)

  firstChildren.forEach((child) => {
    if (child) {
      gsap.set(child, {
        transform: "translateY(100%)",
      })
    }
  })

  // Reset letters immediately as well
  secondChildren.forEach((letter: SVGPathElement) => {
    gsap.set(letter, {
      // Using GSAP to directly set SVG attributes
      attr: { transform: "matrix(1,0,0,1,0,800)" },
    })
  })

  thirdChildren.forEach((info) => {
    gsap.set(info, {
      transform: "translateY(100%)",
    })
  })
}

function AnimationBegin(
  firstChildren: HTMLElement[],
  secondChildren: SVGPathElement[],
  thirdChildren: HTMLElement[]
) {
  firstChildren.forEach((child, i) => {
    gsap.to(child, {
      transform: "translateY(0%)",
      duration: 1 - i * 0.1,
      delay: 0.6 + i * 0.1,
      ease: "power4.out",
    })
  })

  secondChildren.forEach((letter, i) => {
    gsap.to(letter, {
      attr: { transform: "matrix(1,0,0,1,0,-60)" },
      duration: 0.8 + i * 0.01,
      delay: 0.6 + i * 0.05,
      ease: "power4.out",
    })
  })

  thirdChildren.forEach((info, i) => {
    gsap.to(info, {
      transform: "translateY(0%)",
      duration: 1 - i * 0.1,
      delay: 1 + i * 0.1,
      ease: "power4.out",
    })
  })
}

function AnimationEnd(
  firstChildren: HTMLElement[],
  secondChildren: SVGPathElement[],
  thirdChildren: HTMLElement[]
) {
  firstChildren.forEach((child, i) => {
    if (child) {
      gsap.to(child, {
        transform: "translateY(-100%)",
        duration: 1 - i * 0.1,
        delay: 0.6 + i * 0.1,
        ease: "power4.out",
      })
    }
  })

  // Optionally reset letters too, if needed
  secondChildren.forEach((letter, i) => {
    gsap.to(letter, {
      attr: { transform: "matrix(1,0,0,1,0,-800)" },
      duration: 0.4 + i * 0.01,
      delay: 0.2 + i * 0.05,
      ease: "power4.in",
    })
  })

  thirdChildren.forEach((info, i) => {
    gsap.to(info, {
      transform: "translateY(-100%)",
      duration: 0.2 + i * 0.1,
      ease: "power4.in",
    })
  })
}

export { setAnimation, AnimationBegin, AnimationEnd }
