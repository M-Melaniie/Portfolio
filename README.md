# **Portfolio - Mélanie Marcaggi**

## **Description**

Un portfolio interactif et moderne développé avec Vue.js, conçu pour :

- Présenter mes réalisations et compétences.
- Permettre aux visiteurs de me contacter via un formulaire intuitif.
- Offrir une expérience utilisateur fluide et responsive.

---

## **Fonctionnalités principales**

- 🌐 **Navigation fluide** : Liens actifs et routage efficace entre les différentes sections grâce à Vue Router.
- 📜 **Défilement fluide** : Un design responsive avec animations CSS et transitions agréables.
- ✉️ **Formulaire de contact fonctionnel** : Permet aux visiteurs d’envoyer des messages via une API Node.js.
- 🚨 **Page 404 personnalisée** : Une page dédiée aux routes non définies, avec un lien pour retourner à l'accueil.
- 📱 **Design responsive** : Adapté pour les écrans desktop, tablette et mobile.

---

## **Installation et utilisation**

### **1. Prérequis**

- **Node.js** (version 14 ou supérieure)
- **npm** ou **yarn** installé sur votre machine

### **2. Installation des dépendances**

Clonez ce dépôt avec la commande suivante :

```bash
git clone https://github.com/MelanieMarcaggi/portfolio.git
cd portfolio

Ensuite, installez les dépendances nécessaires :
npm install

### **3. Lancer l'application**
Front-end : Démarrez le serveur de développement Vue.js :
npm run serve
Ouvrez ensuite l'application à l'adresse http://localhost:8080

Back-end : Lancez le serveur Node.js (API pour le formulaire de contact) dans un autre terminal :
node server.js
L'API sera accessible sur http://localhost:3000

Structure du projet

Voici un aperçu des principaux fichiers et dossiers du projet :
portfolio/
├── src/
│   ├── assets/        # Images et ressources
│   ├── components/    # Composants Vue.js (Header, Footer, Formulaire)
│   ├── views/         # Pages principales (Accueil, Réalisations, Contact, NotFound)
│   ├── router.js      # Configuration Vue Router
│   └── App.vue        # Composant racine
├── public/            # Fichiers publics (favicon, index.html)
├── server.js          # Serveur Node.js pour l'API de contact
├── package.json       # Configuration du projet et dépendances
└── README.md          # Documentation du projet


Technologies utilisées

Vue.js : Framework JavaScript pour l'interface utilisateur.
Vue Router : Gestion des routes et navigation.
Node.js : Serveur back-end pour gérer les messages du formulaire.
CSS3 : Stylisation et animations.

Auteur

Mélanie Marcaggi
LinkedIn | GitHub
```
