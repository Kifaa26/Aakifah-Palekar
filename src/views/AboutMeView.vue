<template>
 <section>
    <div class="about-container">
      <div class="text-container">
        <div v-if="aboutMe">
          <h2 class="title">{{ aboutMe.title }}</h2>
          <div class="fun-block">
            <p>{{ aboutMe.description }}</p>
          </div>
        </div>
        <SpinnerComp v-else />
      </div>
    </div>
  </section>

  <section>
    <div class="skills-section" v-if="softSkills && softSkills.length">
      <h3 class="skills-title">Soft Skills</h3>
      <div class="skills-container">
        <div v-for="skill in softSkills" :key="skill.name" class="skill-item">
          <i :class="getIconClass(skill.name)" :style="{ color: skill.color }"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>

   <section>
    <div class="tech-skills-section" v-if="technicalSkills && technicalSkills.length">
      <h3 class="tech-skills-title">Technical Skills</h3>
      <div class="tech-skills-container">
        <div v-for="skill in technicalSkills" :key="skill.name" class="tech-skill-item">
          <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="tech-skill-logo" />
          <i v-else :class="getTechIconClass(skill.name)" :style="{ color: skill.color }"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>

   <section class="hobbies-section" v-if="hobbies && hobbies.length">
    <h3 class="hobbies-title">Hobbies</h3>
    <div class="hobbies-container">
      <div v-for="hobby in hobbies" :key="hobby.name" class="hobby-item">
        <img :src="hobby.image" :alt="hobby.name" class="hobby-image" loading="lazy">
        <p class="hobby-name">{{ hobby.name }}</p>
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
      aboutMe: {
        title: 'About Me',
        description: 'I am a passionate web developer with a deep curiosity for the technologies behind website and application creation. From a young age, I’ve been fascinated by how websites and web applications are built, and in high school, I discovered coding as the key to bringing these ideas to life. This discovery solidified my path toward a career in web development. I’ve gained valuable knowledge and skills in frontend and backend development, and I’m eager to apply my abilities in a professional setting. I thrive in relaxed, collaborative environments where camaraderie and teamwork are valued, and laughter is part of the day. While I enjoy light-hearted moments, I understand the importance of focus and dedication when it comes to getting the job done. I take pride in fostering a positive atmosphere, especially in challenging situations, and I’m driven by the belief that motivation and collaboration are key to achieving success and completing projects.'
      },
      softSkills: [
        { name: 'Communication', icon: 'fa-comments', color: '#4a90e2' },
        { name: 'Team Work', icon: 'fa-users', color: '#50e3c2' }, 
        { name: 'Time Management', icon: 'fa-clock', color: '#f5a623' }, 
        { name: 'Problem-solving', icon: 'fa-lightbulb', color: '#b8e986' },
        { name: 'Creativity', icon: 'fa-paint-brush', color: '#ff5e57' }, 
        { name: 'Active listening', icon: 'fa-ear-listen', color: '#9013fe' }, 
        { name: 'Adaptability', icon: 'fa-sync-alt', color: '#d0021b' }, 
        { name: 'Work Ethic', icon: 'fa-briefcase', color: '#e67e22' } 
      ],
      technicalSkills: [
        { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', color: '#e34c26' },
        { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', color: '#1572b6' },
        { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', color: '#f7df1e' },
        { name: 'Vue.Js', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', color: '#42b883' },
        { name: 'Node.Js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', color: '#8cc84b' },
        { name: 'MySQL', icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', color: '#00758F' }, 
        { name: 'Canva', svgPath: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Canva_logo.svg' },  
        { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', color: '#333' }
      ],
      hobbies: [
        { name: 'Reading', image: 'https://github.com/Kifaa26/images/blob/main/images/books.jpg?raw=true' },
        { name: 'Hiking', image: 'https://github.com/Kifaa26/images/blob/main/images/hiking%202.jpg?raw=true' },
        { name: 'Gyming', image: 'https://github.com/Kifaa26/images/blob/main/images/gym.jpg?raw=true' },
        { name: 'Family time', image: 'https://github.com/Kifaa26/images/blob/main/images/family%204.jpg?raw=true' }
      ]
    };
  },
  methods: {
    getIconClass(skillName) {
      const skill = this.softSkills.find(s => s.name === skillName);
      return skill ? `fas ${skill.icon}` : '';
    },
    getTechIconClass(skillName) {
      const skill = this.technicalSkills.find(s => s.name === skillName);
      return skill ? `fab ${skill.icon}` : '';
    }
  }
}
</script>

<style scoped>

.about-container {
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column; 
  padding: 8rem; 
}

.text-container {
  font-family: "Bubbler One", sans-serif;
  max-width: 90%; 
  text-align: center; 
}

.image-container {
  display: flex;
  justify-content: center; 
  max-width: 90%; 
}

.about-image {
  width: 100%;
  max-width: 400px; 
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  margin-top: 20px; 
}

.about-image:hover {
  transform: scale(1.05);
}

.title {
  font-size: 3rem;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 2rem;
  text-align: center; 
}

.fun-block {
  border: 4px double #000000;
  border-radius: 10px;
  padding: 1rem;
  max-width: 90%; 
  margin: 20px auto; 
  text-align: center; 
}

p {
  font-size: 1.3rem;
  line-height: 1.6;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
}

.skills-section,
.tech-skills-section {
  text-align: center;
}

.skills-title,
.tech-skills-title {
  font-size: 3rem;
  color: whitesmoke;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px #000000;
}

.skills-container,
.tech-skills-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2.5rem;
  max-width: 90%; 
  margin: 10px auto; 
  padding: 3.5rem;
  justify-items: center; 
}

.skill-item,
.tech-skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
  text-align: center; 
}

.skill-item i,
.tech-skill-item i {
  font-size: 2.5rem;
  text-shadow: 2px 2px 5px #000000;
}
.hobbies-section {
  text-align: center;
  margin: 2rem auto;
  padding: 2rem;
}

.hobbies-title {
  font-size: 2.5rem;
  color: whitesmoke;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 5px #000000;
}

.hobbies-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap; 
}

.hobby-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hobby-image {
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.hobby-name {
  font-size: 1.4rem;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
}



@media (max-width: 1024px) {
  .about-container {
    padding: 4rem; 
  }

  .text-container, .image-container {
    max-width: 100%; 
  }

  .about-image {
    width: 80%; 
    max-width: 300px; 
  }

  .fun-block {
    max-width: 100%; 
    padding: 0.5rem; 
  }

  .skills-container,
  .tech-skills-container {
    grid-template-columns: 1fr; 
    padding: 2rem; 
  }
}

@media (max-width: 1024px) {
  .about-container {
    padding: 10vh; 
  }

  .text-container, .image-container {
    max-width: 100%; 
  }

  .about-image {
    width: 80%; 
    max-width: 300px; 
  }

  .fun-block {
    max-width: 100%; 
    padding: 5vh; 
  }

  .skills-container,
  .tech-skills-container {
    grid-template-columns: 1fr; 
    padding: 10vh; 
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem; 
    padding: 10vh; 
  }

  .fun-block {
    padding: 5vh; 
  }

  .skills-title,
  .tech-skills-title {
    font-size: 2.5rem; 
  }

  .hobbies-title {
    font-size: 2rem; 
  }

  .hobbies-container {
    gap: 5vh; 
  }

  .hobby-image {
    width: 180px;
    height: 180px; 
  }

  .skill-item,
  .tech-skill-item {
    font-size: 1.1rem; 
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem; 
  }

  .skills-title,
  .tech-skills-title,
  .hobbies-title {
    font-size: 1.8rem; 
  }

  .hobbies-container {
    gap: 2vh; 
  }

  .hobby-image {
    width: 150px;
    height: 150px; 
  }

  .skill-item,
  .tech-skill-item {
    font-size: 1rem; 
  }
}

.tech-skill-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 2rem;
    color: whitesmoke;
    text-shadow: 2px 2px 5px #000000;
    font-family: "Bubbler One", sans-serif;
    text-align: center;
  }

  .tech-skill-logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .tech-skills-container { 
    padding: 10vh; 
  }

  @media (max-width: 768px) {
  .title {
    font-size: 2.5rem; 
  }

  .skills-title,
  .tech-skills-title,
  .hobbies-title {
    font-size: 2rem; 
  }

  .hobby-image {
    width: 180px;
    height: 180px; 
  }

  .skill-item,
  .tech-skill-item {
    font-size: 1.2rem; 
  }
}

</style>

