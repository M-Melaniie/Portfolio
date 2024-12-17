<template>
  <section class="hero">
    <div class="hero-logo"></div>
    <div class="hero-text">
      <h1>Mélanie Marcaggi</h1>
      <p>
        Développeuse web passionnée par la création de sites modernes et
        interactifs.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 30px 20px;
  gap: 50px;
  margin-top: -80px;
}

.hero-logo {
  width: 500px;
  height: 500px;
  min-width: 200px; /* Taille minimale pour garantir l'affichage */
  min-height: 200px;
  border-radius: 50%;
  background: url("../assets/mm.png") no-repeat center;
  background-size: cover;
}


.hero h1 {
  font-size: 5rem;
  font-weight: 100;
  color: #fff;
  margin: 0;
  letter-spacing: 2px;
}
.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 100;
  margin-top: -50px;
}
.hero p {
  font-size: 2rem;
  font-weight: 300;
  color: #ccc;
  margin-top: 10px;
  max-width: 600px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column; /* Empile les éléments pour les petits écrans */
    text-align: center;
  }
  .hero-logo {
    width: 250px;
    height: 250px;
  }
  .hero h1 {
    font-size: 3rem;
  }
  .hero p {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    width: 200px;
    height: 200px;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .hero p {
    font-size: 1rem;
  }
}

</style>
