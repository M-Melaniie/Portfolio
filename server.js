console.log("Initialisation du serveur...");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express(); // Doit venir avant les middleware.
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint POST pour le formulaire de contact
app.post("/contact", (req, res) => {
  console.log("Requête reçue :", req.body); // Afficher les données de la requête
  const { name, subject, message } = req.body;

  // Vérifier si toutes les données nécessaires sont présentes
  if (!name || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  // Répondre avec un message de succès
  res.status(200).json({ message: "Message envoyé avec succès !" });
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
  console.error("Erreur serveur :", err);
  res.status(500).json({ error: "Erreur interne du serveur" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
