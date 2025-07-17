tailwind.config = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#4B4B4B", // Gris oscuro para texto
        bg: "#FFFFFF", // Fondo general beige claro
        heading: "#DC2E78", // Rosa fuerte pastel (títulos)
        primary: "#F472B6", // Rosa pastel medio (botones)
        "primary-hover": "#EC4899", // Hover para botón rosa
        footer: "#FBCFE8", // Rosa claro del footer
        "svg-decor": "#fad0e9", // Curvas decorativas
        "pink-soft": "#FBCFE8", // Rosa pastel suave
        "blue-soft": "#7fcacd", // Azul pastel claro
        "blue-very-soft": "#99e4e7", // Azul muy muy claro
      },
      fontFamily: {
        heading: ["Pacifico", "cursive"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideOut: {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn .8s ease-in-out",
        fadeOut: "fadeOut .8s ease-in-out",
        slideIn: "slideIn .3s ease-in-out",
        slideOut: "slideOut .3s ease-in-out",
      },
    },
  },
  plugins: [],
};

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navWrapper = document.getElementById("navWrapper");
  const stickyClass = "fixed top-0 left-0 right-0 bg-blue shadow-lg z-50";

  function handleScroll() {
    const navWrapperRect = navWrapper.getBoundingClientRect();

    if (navWrapperRect.top <= 0) {
      navbar.classList.add(...stickyClass.split(" "));
    } else {
      navbar.classList.remove(...stickyClass.split(" "));
    }
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const openMenuBtn = document.getElementById("openMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    mobileMenu.classList.remove("hidden"); // Ensure the menu is visible before the animation
  }

  function closeMenu() {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    setTimeout(() => {
      mobileMenu.classList.add("hidden"); // Hide the menu after the animation
    }, 300); // Match the duration of the transition
  }

  openMenuBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);

  // Close the menu when a menu item is clicked
  mobileMenu.querySelectorAll("a").forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fadeIn-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fadeIn");
          observer.unobserve(entry.target); // Deja de observar el elemento una vez que la animación está activada
        }
      });
    },
    {
      threshold: 0.1, // El elemento debe estar al menos un 10% visible para activar la animación
    }
  );

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});

// Navbar background change on scroll
      document.addEventListener("DOMContentLoaded", function () {
        const header = document.getElementById("mainHeader");
        const navWrapper = document.getElementById("navWrapper");
        const hero = document.getElementById("home");
        function setNavbarBg() {
          const heroRect = hero.getBoundingClientRect();
          if (heroRect.bottom <= 0) {
            header.style.background = "#F472B6";
            header.classList.add("shadow-lg");
            navWrapper.style.background = "#F472B6";
            navWrapper.classList.add("shadow-lg");
          } else {
            header.style.background = "transparent";
            header.classList.remove("shadow-lg");
            navWrapper.style.background = "transparent";
            navWrapper.classList.remove("shadow-lg");
          }
        }
        window.addEventListener("scroll", setNavbarBg);
        setNavbarBg();
      });