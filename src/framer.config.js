export const textAnimation = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: custom * 1.1 },
  }),
}

export const headingAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: custom * 0.9 },
  }),
}

export const titleAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: custom * 0.3 },
  }),
}

export const linksAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 3.5 + custom * 1,
    },
  }),
}

export const listAnimation = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 5.6 + custom * 1.1,
    },
  }),
}

export const skillsAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: [1, 1.3, 1],
    opacity: 1,
    color: ["#475569", "#1d4ed8", "#475569"],
    transition: { duration: 0.6, delay: 1.2 + custom * 0.5 },
  }),
}


export const projectsAnimation = {
  hidden: {
    y: 50,
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.9 },
  }),
}