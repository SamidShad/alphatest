export let full_screen_menu_animation = {
  initial: {
    y: -1500,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  exit: {
    y: -1500,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export let full_screen_menu_links_animation = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 100,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export let all_section_animation = {
  initial: {
    opacity: 0,
    y: -20,
    filter: "blur(15px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
};
