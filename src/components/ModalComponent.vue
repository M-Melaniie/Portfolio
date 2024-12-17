<template>
  <div class="modal-overlay" v-if="isOpen" @click.self="closeModal">
    <div class="modal-content">
      <!-- Bouton de fermeture -->
      <button class="modal-close" @click="closeModal">✖</button>

      <!-- Aperçus spécifiques -->
      <div class="modal-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Aperçu ' + (index + 1)"
          class="modal-preview"
        />
      </div>

      <!-- Titre -->
      <h2 class="modal-title">{{ title }}</h2>

      <!-- Date de création -->
      <p><strong>Date de création :</strong> {{ date }}</p>

      <!-- Technologies utilisées -->
      <p><strong>Technologies utilisées :</strong> {{ technologies }}</p>

      <!-- Lien vers le projet -->
      <p>
        <strong>Voir la réalisation : </strong>
        <a :href="link" target="_blank" rel="noopener noreferrer"
          >Cliquez ici</a
        >
      </p>

      <!-- Lien GitHub (optionnel) -->
      <p v-if="repository">
        <strong>GitHub :</strong>
        <a :href="repository" target="_blank" rel="noopener noreferrer"
          >Lien vers le repository</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    repository: {
      type: String,
      default: null,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    closeModal() {
      this.$emit("close"); // Émet l'événement pour fermer la modal
    },
  },
};
</script>

<style scoped>
/* Overlay de la modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Contenu de la modal */
.modal-title {
  font-size: 30px !important; /* Taille spécifique avec priorité élevée */
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  color: #fff;
}

.modal-content {
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: center;
  color: #019887;
}

/* Bouton de fermeture */
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

/* Images de la modal */
.modal-images img {
  max-width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
}

.modal-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.modal-preview {
  max-width: 150px; /* Largeur maximale de l’aperçu */
  max-height: 150px; /* Hauteur maximale de l’aperçu */
  border-radius: 5px; /* Coins arrondis */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Ombre pour un effet visuel */
  transition: transform 0.2s ease; /* Animation lors du survol */
}

.modal-preview:hover {
  transform: scale(1.1); /* Effet d'agrandissement au survol */
}
</style>
