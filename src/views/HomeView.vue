<template>
  <section class="home-section">
    <div class="home-content">
      <div class="text-content">
        <h1>{{ home.title }}</h1>
        <h4>{{ home.subtitle }}</h4>
        <p class="pt-3">{{ home.description }}</p>
        <div>
          <a href="https://pdf.ac/3LXURX" target="_blank" class="btn btn-primary mt-3">My Resume</a>
        </div>
        <SpinnerComp v-if="home-section" />
      </div>
      <div class="spinner-overlay" v-if="home-section">
        <SpinnerComp />
      </div>
      <div class="image-container">
        <img :src="home.image" alt="Portfolio Image" class="portfolio-image" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script>
import SpinnerComp from '@/components/Spinner.vue';

export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      home: {
        title: "Aakifah Palekar",
        subtitle: "Software Developer",
        description: "I’m passionate about software development, driven by problem-solving, continuous learning, and collaborating on innovative projects to create impactful solutions.",
        image: "https://github.com/Kifaa26/images/blob/main/images/Aakifah%202.jpeg?raw=true"
      },
      loading: false
    };
  }
};
</script>

<style scoped>
.home-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-family: "Fahkwang", sans-serif;
}

.home-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 70px;
}

.text-content {
  flex: 1;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 100px;
}

.portfolio-image {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0; 
  animation: slideIn 1s forwards; 
}

@keyframes slideIn {
  from {
    transform: translateX(100%); 
    opacity: 0; 
  }
  to {
    transform: translateX(0); 
    opacity: 1; 
  }
}

.text-content h1 {
  font-family: "Patrick Hand", cursive;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-size: 4rem;
}

.text-content h4 {
  font-family: "Bubbler One", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-size: 2rem;
}

.text-content p {
  font-family: "Bubbler One", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-size: 1.5rem;
}

.btn-primary {
  background-color: #134197;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #5091e6;
}
</style>