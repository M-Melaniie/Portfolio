<template>
  <div id="app">
    <!-- Le router gère le rendu des différentes pages -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Styles globaux */
body {
  margin: 0;
  font-family: "Playfair Display", serif;
  background-color: #1e1e1e;
  color: #fff;
  scroll-behavior: smooth; /* Défilement fluide */
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  padding: 0;
  margin: 0;
}

main {
  padding-top: 100px; /* Pour éviter que le header fixe ne cache le contenu */
}
</style>
