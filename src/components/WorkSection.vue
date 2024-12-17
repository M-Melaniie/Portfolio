<template>
  <section id="work">
    <h2>Réalisations</h2>
    <div class="realisation-container">
      <div
        v-for="(realisation, index) in realisations"
        :key="index"
        class="realisation-box"
        @click="openModal(realisation)"
      >
        <img
          :src="realisation.image"
          :alt="realisation.title"
          class="realisation-image"
        />
        <p>{{ realisation.title }}</p>
      </div>
    </div>

    <!-- Modal dynamique -->
    <ModalComponent
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      :title="modalData.title"
      :date="modalData.date"
      :technologies="modalData.technologies"
      :link="modalData.link"
      :repository="modalData.repository"
      :images="modalData.images"
      @close="isModalOpen = false"
    />
  </section>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";

export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      realisations: [
        {
          title: "Cv en ligne",
          image: require("@/assets/Cv.png"), // Image principale pour la galerie
          date: "24-11-2024",
          technologies: "HTML5, CSS3",
          link: "/realisations/cv_de_mel_en_ligne/index.html", // Lien vers la page complète
          repository: null,
          images: ["/realisations/cv_de_mel_en_ligne/images/preview.png"], // Chemin vers l'aperçu
        },

        {
          title: "Cahier des charges",
          image: require("@/assets/Cahier_des_charges.png"), // Image principale pour la galerie
          date: "03-12-2024",
          technologies: "Canva, PDF Export",
          link: "/realisations/cahier_des_charges/cahier_des_charges.pdf", // Lien vers le PDF
          repository: null,
          images: ["/realisations/cahier_des_charges/preview.png"], // Aperçu spécifique dans la modal
        },
        {
          title: "Dynamisme d'un site",
          image: require("@/assets/Dynamisme.png"), // Image principale pour la galerie
          date: "08-12-2024",
          technologies: "HTML5, JavaScript",
          link: "/realisations/espace-commentaires/index.html", // Lien vers le fichier HTML
          repository: null,
          images: ["/realisations/espace-commentaires/preview.png"], // Aperçu spécifique dans la modal
        },
      ],
      isModalOpen: false,
      modalData: {
        title: "",
        date: "",
        technologies: "",
        link: "",
        repository: "",
        images: [],
      },
    };
  },
  methods: {
    openModal(realisation) {
      this.modalData = realisation; // Charge les données de la réalisation
      this.isModalOpen = true; // Ouvre la modal
    },
  },
};
</script>

<style scoped>
/* Conteneur principal */
.realisation-container {
  display: flex;
  justify-content: center; /* Centrage global */
  gap: 20px; /* Espacement uniforme */
  flex-wrap: wrap; /* Permet de passer sur plusieurs lignes */
  padding: 20px;
}


/* Boîte de chaque réalisation */
.realisation-box {
  width: 300px; /* Taille cohérente pour toutes les boîtes */
  height: 350px; /* Hauteur fixe */
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column; /* Empile l'image et le texte */
  align-items: center;
  justify-content: space-between; /* Espace équilibré entre l'image et le texte */
}

/* Image des réalisations */
.realisation-image {
  width: 100%; /* Prend toute la largeur de la boîte */
  height: 200px; /* Taille cohérente pour toutes les images */
  object-fit: cover; /* Gère le recadrage propre */
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.realisation-image:hover {
  transform: scale(1.05); /* Agrandir légèrement au survol */
  box-shadow: 20px 20px 20px rgba(1, 152, 135, 0.7); /* Ombre ciblée uniquement en bas à droite */
}

/* Description sous chaque réalisation */
.realisation-box p {
  font-size: 1.2rem;
  color: #fff;
  margin-top: 10px;
  line-height: 1.4;
  height: 50px; /* Hauteur fixe pour éviter les décalages */
  overflow: hidden; /* Coupe le texte si nécessaire */
  text-overflow: ellipsis; /* Ajoute des points de suspension si le texte est trop long */
}

#work > h2 {
  font-size: 2.5rem; /* Taille uniquement pour les titres directs */
  font-weight: 100;
  margin-bottom: 30px;
  text-align: center;
}

@media (max-width: 768px) {
  .realisation-container {
    gap: 15px; /* Réduction de l'espace entre les boîtes */
  }
  .realisation-box {
    width: 90%; /* Prend presque toute la largeur */
    height: auto; /* Ajuste la hauteur dynamiquement */
  }
  .realisation-image {
    height: 150px; /* Taille réduite pour les images */
  }
  .realisation-box p {
    font-size: 1rem; /* Taille réduite pour le texte */
  }
}

@media (max-width: 480px) {
  .realisation-box {
    width: 100%; /* Utilise toute la largeur disponible */
  }
  .realisation-image {
    height: 120px; /* Réduction supplémentaire */
  }
  .realisation-box p {
    font-size: 0.9rem; /* Encore plus petit pour les très petits écrans */
  }
}

</style>
