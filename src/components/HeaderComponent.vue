<template>
  <header class="header">
    <!-- Logo cliquable -->
    <a href="#home" class="logo">
      <img src="@/assets/mm.png" alt="Logo Mélanie Marcaggi" />
    </a>

    <!-- Navigation -->
    <nav>
      <ul class="nav-links">
        <li>
          <a
            href="#home"
            :class="{ active: currentSection === 'home' }"
            @click="scrollTo('home')"
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="#work"
            :class="{ active: currentSection === 'work' }"
            @click="scrollTo('work')"
          >
            Réalisations
          </a>
        </li>
        <li>
          <a
            href="#contact"
            :class="{ active: currentSection === 'contact' }"
            @click="scrollTo('contact')"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentSection: "home", // Section active par défaut
    };
  },
  mounted() {
    this.detectSection(); // Détecter la section active dès le démarrage
    window.addEventListener("scroll", this.detectSection);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.detectSection);
  },
  methods: {
    detectSection() {
      const sections = document.querySelectorAll("section");
      let activeSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // Vérifier si la section est visible (en incluant les cas pour le bas)
        if (
          (rect.top >= 0 && rect.top <= window.innerHeight / 2) ||
          (rect.bottom >= window.innerHeight / 2 &&
            rect.bottom <= window.innerHeight)
        ) {
          activeSection = section.id;
        }
      });

      // Défaut si aucune section trouvée (par exemple, en haut)
      if (!activeSection) {
        activeSection = "home";
      }

      // Mettre à jour la section active uniquement si elle change
      if (this.currentSection !== activeSection) {
        this.currentSection = activeSection;
      }
    },
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        this.currentSection = sectionId; // Mettre à jour immédiatement après un clic
      }
    },
  },
};
</script>
<style scoped>
/* Styles pour le header */
header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  background-color: #1e1e1e;
  z-index: 100;
}

.logo img {
  width: 60px;
  height: auto;
  cursor: pointer;
}

.nav-links {
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  list-style: none;
  justify-content: space-around;
  flex-wrap: wrap;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.nav-links a.active {
  text-decoration: underline;
  font-weight: bold;
  color: #019887;
}
@media (max-width: 768px) {
  .nav-links a {
    font-size: 0.9rem; /* Réduction de la taille de la police */
  }
}

</style>
