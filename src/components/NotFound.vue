<template>
  <div class="not-found">
    <img
      src="@/assets/404.png"
      alt="Page non trouvée"
      class="not-found-image"
    />
    <div class="button-container">
      <a href="/" class="go-home">Retour à l'accueil</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    document.title = "404 - Page Introuvable | Portfolio Mélanie Marcaggi";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Cette page n'existe pas. Retournez à l'accueil du portfolio de Mélanie Marcaggi.";
    document.head.appendChild(metaDescription);
  },
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  color: #fff;
}

.not-found-image {
  width: 500px; /* Taille agrandie pour mieux mettre en valeur l'image */
  margin: 20px auto;
}

.go-home {
  display: inline-block; /* Le bouton reste en ligne */
  margin: 20px auto; /* Espace autour du bouton */
  padding: 10px 20px;
  background-color: #019887;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
}

h1 {
  font-size: 5rem;
  margin: 20px 0;
}

p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.go-home:hover {
  background-color: #017a62;
}
</style>
