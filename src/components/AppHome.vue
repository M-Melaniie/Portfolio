<template>
  <div>
    <HeaderComponent />
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import HeroSection from "./HeroSection.vue";
import WorkSection from "./WorkSection.vue";
import ContactForm from "./ContactForm.vue";

export default {
  name: "AppHome",
  components: {
    HeaderComponent,
    FooterComponent,
    HeroSection,
    WorkSection,
    ContactForm,
  },
};
</script>
