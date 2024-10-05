<template>
  <section class="home-section">
    <div class="home-content">
      <div class="text-content">
        <div class="name-wrapper">
          <h1>{{ home.firstName }}</h1>
          <h1>{{ home.lastName }}</h1>
        </div>
        <h4>{{ home.subtitle }}</h4>
        <p class="pt-3">{{ home.description }}</p>
        <div>
          <a href="https://pdf.ac/2i0u5z" target="_blank" class="btn btn-primary mt-3">My Resume</a>
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
      firstName: "Aakifah",
      lastName: "Palekar",
      subtitle: "Web Developer",
      description: "I’m passionate about web development, driven by crafting user-friendly interfaces, staying up-to-date with the latest technologies, and collaborating on creative projects to build engaging and dynamic web experiences.",
      image: "https://github.com/Kifaa26/images/blob/main/images/Aakifah%202.jpeg?raw=true"
    },
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
  opacity: 0; 
  animation: fadeIn 1s forwards; 
  animation-delay: 0.5s; 
  color: #8f5acc;
  -webkit-background-clip: text; 
  background-clip: text; 
  font-weight: 600; 
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px); 
  }
  to {
    opacity: 1;
    transform: translateY(0); 
  }
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

.name-wrapper {
  display: flex;
  align-items: baseline; 
  gap: 1rem;
}

.name-wrapper h1 {
  margin: 0; 
  font-size: 4rem; 
}

.text-content h1 {
  font-family: "Patrick Hand", cursive;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
}

@media (max-width: 600px) {
  .home-section {
    flex-direction: column;
    align-items: center;
  }

  .home-content {
    margin-left: 0;
    gap: 1rem;
    flex-direction: column;
  }

  .image-container {
    padding: 0.25rem; 
  }

  .portfolio-image {
    width: 100%; 
    max-width: 400px; 
  }

  .text-content h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .text-content h4 {
    font-size: 1.5rem;
    margin-top: 0.5rem; 
  }

  .text-content p {
    font-size: 1rem;
  }

  .name-wrapper {
    padding: 5rem 0 0; 
  }
}

@media (min-width: 600px) and (max-width: 1024px) {
  .home-section {
    flex-direction: column;
    padding: 2.5rem;
  }

  .home-content {
    margin-left: 0;
    gap: 1.5rem;
    flex-direction: column;
    padding: 4vh;
  }

  .image-container {
    padding: 4vh;
  }

  .portfolio-image {
    max-width: 350px;
  }

  .text-content h1 {
    font-size: 2.5rem;
  }

  .text-content h4 {
    font-size: 1.75rem;
  }

  .text-content p {
    font-size: 1.2rem;
  }
}

@media (min-width: 1024px) {
  .home-section {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem;
  }

  .home-content {
    flex-direction: row;
    margin-left: 70px;
    gap: 2rem;
  }

  .image-container {
    padding: 130px;
  }

  .portfolio-image {
    max-width: 400px;
  }

  .text-content h1 {
    font-size: 4rem;
  }

  .text-content h4 {
    font-size: 2rem;
  }

  .text-content p {
    font-size: 1.5rem;
  }
}
</style>