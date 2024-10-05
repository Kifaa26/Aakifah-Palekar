<template>
  <section class="container">
    <div class="section">
      <h2>Education</h2>
      <div v-for="(edu, index) in education" :key="index" class="content-item">
        <div class="content-row">
          <img :src="edu.image" alt="Education Image" class="education-image" loading="lazy" v-if="edu.image" />
          <div class="text-content">
            <h3>{{ edu.degree }}</h3>
            <p><strong>School:</strong> {{ edu.school }}</p>
            <p><strong>Year:</strong> {{ edu.year }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Experience</h2>
      <div v-for="(exp, index) in experience" :key="index" class="content-item">
        <div class="content-row">
          <img :src="exp.image" alt="Experience Image" class="experience-image" loading="lazy" v-if="exp.image" />
          <div class="text-content">
            <h3>{{ exp.position }}</h3>
            <p><strong>Company:</strong> {{ exp.company }}</p>
            <p><strong>Year:</strong> {{ exp.year }}</p>
            <p><strong>Description:</strong> {{ exp.description }}</p>
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
      experience: [
        {
          position: "Web Developer",
          company: "LC Studio",
          year: "September 2024 - Present",
          description: "I'm currently an intern at LC Studio.",
          image: "https://github.com/Kifaa26/images/blob/main/images/lc_studioza_logo.jpeg?raw=true"
        },
        {
          position: "Customer Service Representative",
          company: "Teleperformance",
          year: "October 2022 - December 2023",
          description: "Assisted customers with inquiries and issues related to products and services.",
          image: "https://github.com/Kifaa26/images/blob/main/images/TP.jpg?raw=true"
        }
      ],
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 5rem;
}

.section {
  width: 100%;
  max-width: 800px; 
  margin-bottom: 4rem;
}

.content-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.text-content {
  flex: 1;
}

.education-image, .experience-image {
  max-width: 180px;
  height: auto;
  border-radius: 8px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  font-family: "Permanent Marker", cursive;
  color: #ffffff;
  text-shadow: 2px 2px 5px #000000;
  text-align: center; 
  padding: 2.5rem;
}

h3 {
  font-size: 1.7rem;
  font-family: "Permanent Marker", cursive;
  color: #ffffff;
  text-shadow: 2px 2px 5px #000000;
}

p {
  font-size: 1.4rem;
  font-family: "Bubbler One", sans-serif;
  color: #ffffff;
  text-shadow: 2px 2px 5px #000000;
}

@media (max-width: 1024px) {
  .content-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .education-image, .experience-image {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 4.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>