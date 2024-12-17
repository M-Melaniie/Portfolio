<template>
  <section id="contact">
    <h2>Contactez-moi</h2>
    <form @submit.prevent="validateAndSend">
      <div>
        <input
          v-model="form.name"
          type="text"
          placeholder="Nom et prénom"
          required
        />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      <div>
        <input
          v-model="form.subject"
          type="text"
          placeholder="Objet"
          required
        />
        <p v-if="errors.subject" class="error">{{ errors.subject }}</p>
      </div>
      <div>
        <textarea
          v-model="form.message"
          placeholder="Message"
          required
        ></textarea>
        <p v-if="errors.message" class="error">{{ errors.message }}</p>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        subject: "",
        message: "",
      },
      errors: {
        name: null,
        subject: null,
        message: null,
      },
    };
  },
  methods: {
    validateAndSend() {
      this.clearErrors();

      // Validation
      if (!this.form.name.trim()) {
        this.errors.name = "Veuillez entrer votre nom et prénom.";
      }
      if (!this.form.subject.trim()) {
        this.errors.subject = "Veuillez entrer l'objet de votre message.";
      }
      if (!this.form.message.trim()) {
        this.errors.message = "Veuillez entrer votre message.";
      }

      // Arrêter si des erreurs existent
      if (Object.values(this.errors).some((error) => error)) {
        return;
      }

      // Sinon, envoyer le message
      this.sendMessage();
    },
    clearErrors() {
      this.errors = {
        name: null,
        subject: null,
        message: null,
      };
    },
    async sendMessage() {
      const url =
        process.env.VUE_APP_CONTACT_API_URL || "http://localhost:3000/contact";

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          alert("Message envoyé avec succès !");
          this.form = { name: "", subject: "", message: "" }; // Réinitialiser le formulaire
        } else {
          alert("Une erreur s'est produite. Vérifiez l'API.");
        }
      } catch (error) {
        alert("Erreur réseau. Vérifiez votre connexion.");
      }
    },
  },
};
</script>

<style scoped>
#contact {
  padding: 50px 20px;
  text-align: center;
}

#contact h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: normal;
}

form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input,
form textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

form textarea {
  height: 120px;
}

form button {
  width: 105%; /* Assure que le bouton a la même largeur que les champs */
  padding: 15px;
  font-size: 1rem;
  background-color: #019874;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center; /* Assure le centrage du texte */
}

form button:hover {
  background-color: #017a62;
}

@media (max-width: 768px) {
  .form-input,
  .form-button {
    width: 100%; /* Adapte les champs à la largeur de l’écran */
  }
}


</style>
