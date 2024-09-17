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
        subtitle: "Web Developer",
        description: "I’m passionate about web development, driven by crafting user-friendly interfaces, staying up-to-date with the latest technologies, and collaborating on creative projects to build engaging and dynamic web experiences.",
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
  padding: 3rem;
  flex-wrap: wrap; 
  overflow: hidden; 
}

.home-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 70px;
  flex-wrap: wrap;
}

.text-content {
  flex: 1;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 130px;
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

@media (min-width: 1800px) {
  .home-section {
    padding: 8vh 15vw; 
    gap: 4vh; 
  }

  .home-content {
    gap: 4vh; 
    margin-left: 10vh; 
  }

  .image-container {
    padding: 10vh; 
  }

  .portfolio-image {
    max-width: 500px; 
    border-radius: 20px; 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
  }

  .text-content h1 {
    font-size: 6rem; 
    padding: 0 5vh; 
  }

  .text-content h4 {
    font-size: 3rem; 
  }

  .text-content p {
    font-size: 2rem; 
  }

  .btn-primary {
    padding: 1rem 2rem; 
    font-size: 1.5rem; 
  }

  .spinner-overlay {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  .home-section {
    flex-direction: column;
    align-items: center;
  }

  .home-content {
    margin-left: 0;
    gap: 1rem;
  }

  .image-container {
    padding: 50px;
  }

  .text-content h1 {
    font-size: 1.8rem;
    padding: 90px;
  }

  .text-content h4 {
    font-size: 1.8rem;
  }

  .text-content p {
    font-size: 1.2rem;
  }
}

@media (max-width: 1024px) {
  .home-section {
    flex-direction: column;
    align-items: center;
  }

  .home-content {
    margin-left: 0;
    gap: 1rem;
    padding: 10vh; 
  }

  .image-container {
    padding: 10vh;
  }

  .portfolio-image {
    max-width: 400px; 
  }

  .text-content h1 {
    font-size: 1.8rem;
    padding: 10vh; 
  }

  .text-content h4 {
    font-size: 1.8rem;
  }

  .text-content p {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .home-content {
    flex-direction: column;
    align-items: center;
    padding: 8vh; 
  }

  .image-container {
    padding: 8vh; 
  }

  .portfolio-image {
    max-width: 500px;
  }

  .text-content h1 {
    font-size: 2.5rem;
    padding: 8vh; 
  }

  .text-content h4 {
    font-size: 1.5rem;
  }

  .text-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .portfolio-image {
    max-width: 200px;
  }

  .text-content h1 {
    font-size: 2rem;
    padding: 5vh; 
  }

  .text-content h4 {
    font-size: 1.3rem;
  }

  .text-content p {
    font-size: 1rem;
  }

  .home-content {
    margin-left: 0;
    gap: 0.5rem;
    padding: 5vh; 
  }
}
</style>