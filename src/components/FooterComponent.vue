<template>
  <footer class="footer">
    <div class="social-icons">
      <a
        href="https://github.com/M-Melaniie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/github.png" alt="GitHub" class="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/m%C3%A9lanie-marcaggi-927826262/?originalSubdomain=fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/Linkedin1.png" alt="LinkedIn" class="icon" />
      </a>
      <a
        href="https://www.instagram.com/mel.marcaggi/profilecard/?igsh=anp6MnozZDN0dXM5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/instagram.png" alt="LinkedIn" class="icon" />
      </a>
    </div>
    <p>&copy; 2024 Mélanie Marcaggi. Tous droits réservés.</p>
    <p>Dernière mise à jour : 
      <time datetime="2024-12-16">Décembre 2024</time>
    </p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
      <img style="border:0;width:88px;height:31px"
           src="http://jigsaw.w3.org/css-validator/images/vcss"
           alt="CSS Valide !" />
    </a>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  background-color: #111;
  color: #fff;
  padding: 20px;
  font-size: 0.9rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.icon {
  width: 30px;
  height: 30px;
  transition: transform 0.3s;
}

.icon:hover {
  transform: scale(1.2);
}
</style>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  text-align: center;
  background-color: #2c2c2c;
  padding: 20px;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

footer a {
  color: #00a896;
  text-decoration: none;
  margin: 0 10px;
}
@media (max-width: 768px) {
  .social-icons {
    flex-wrap: wrap;
    justify-content: center;
  }
}


</style>
