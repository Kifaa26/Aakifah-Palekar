<template>
  <section class="grid-container">
    <div class="grid-item">
      <h2>Education</h2>
      <div v-for="(edu, index) in education" :key="index" class="grid-card">
        <div class="grid-card-content">
          <img :src="edu.image" alt="Education Image" class="education-image" loading="lazy" v-if="edu.image" />
          <div class="text-content">
            <h3>{{ edu.degree }}</h3>
            <p><strong>School:</strong> {{ edu.school }}</p>
            <p><strong>Year:</strong> {{ edu.year }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid-item">
      <h2>Experience</h2>
      <div class="grid-card">
        <div class="grid-card-content">
          <img :src="experience.image" alt="Experience Image" class="experience-image" loading="lazy" v-if="experience.image" />
          <div class="text-content">
            <h3>{{ experience.position }}</h3>
            <p><strong>Company:</strong> {{ experience.company }}</p>
            <p><strong>Year:</strong> {{ experience.year }}</p>
            <p><strong>Description:</strong> {{ experience.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      education: [
        {
          degree: "Full-stack Web Development Bootcamp",
          school: "Life Choices Academy",
          year: "April 2024 - September 2024",
          image: "https://github.com/Kifaa26/images/blob/main/images/LC.png?raw=true"
        },
        {
          degree: "NSC - Diploma",
          school: "Plumstead Highschool",
          year: "January 2017 - December 2021",
          image: "https://uniform.wingzero.tw/assets/images/badge/za-450-w-cape-plumstead.Array"
        }
      ],
      experience: {
        position: "Customer Service Representative",
        company: "Teleperformance",
        year: "October 2022 - December 2023",
        description: "Assisted customers with inquiries and issues related to products and services.",
        image: "https://github.com/Kifaa26/images/blob/main/images/TP.jpg?raw=true"
      }
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 13rem;
}

.grid-item {
  background-color: rgba(140, 184, 235, 0.9);
  padding: 3.3rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-card {
  margin-bottom: 1rem;
}

.grid-card-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.education-image {
  max-width: 150px;
  height: auto;
  border-radius: 8px;
}

.experience-image {
    max-width: 180px;
    border-radius: 8px;
}

.text-content {
  flex: 1;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: "Permanent Marker", cursive;
  color: rgba(245, 245, 245, 0.884);
  text-shadow: 2px 2px 5px #000000;
}

h3 {
  font-size: 1.4rem;
  font-family: "Permanent Marker", cursive;
  color: rgba(245, 245, 245, 0.918);
  text-shadow: 2px 2px 5px #000000;
}

p {
  font-size: 1.3rem;
  font-family: "Bubbler One", sans-serif;
  color: rgb(0, 0, 0);
  text-shadow: 2px 2px 5px #8b8b8b;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr; 
    padding: 10rem; 
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; 
    padding: 7rem; 
  }

  .grid-card-content {
    flex-direction: column; 
    align-items: flex-start; 
  }

  .education-image,
  .experience-image {
    max-width: 100%; 
  }

  h2 {
    font-size: 1.8rem; 
  }

  h3 {
    font-size: 1.2rem; 
  }

  p {
    font-size: 1.1rem; 
  }
}

@media (max-width: 480px) {
  .grid-container {
    padding: 5rem; 
  }

  h2 {
    font-size: 1.6rem; 
  }

  h3 {
    font-size: 1rem; 
  }

  p {
    font-size: 1rem; 
  }
}

</style>