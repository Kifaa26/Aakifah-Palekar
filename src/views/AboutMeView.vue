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

  <section v-if="softSkills && softSkills.length">
  <div class="skills-section">
    <h3 class="skills-title">Soft Skills</h3>
    <div class="skills-container">
      <div v-for="skill in softSkills" :key="skill.name" class="skill-item">
        <div class="cube">
          <i :class="getIconClass(skill.name)" :style="{ color: skill.color }"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</section>

   <section>
  <div class="tech-skills-section" v-if="technicalSkills && technicalSkills.length">
    <h3 class="tech-skills-title p-5 m-5">Technical Skills</h3>
    <div class="tech-skills-container">
      <div v-for="skill in technicalSkills" :key="skill.name" class="tech-skill-item">
        <div class="cube">
          <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="tech-skill-logo" />
          <i v-else :class="getTechIconClass(skill.name)" :style="{ color: skill.color }"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</section>

   <section class="hobbies-section" v-if="hobbies && hobbies.length">
    <h3 class="hobbies-title pb-5 m-3">Hobbies</h3>
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
      loading: true,
      aboutMe: {
        title: 'About Me',
        description: 'I am a passionate web developer with a deep curiosity for the technologies behind website and application creation. From a young age, I’ve been fascinated by how websites and web applications are built, and in high school, I discovered coding as the key to bringing these ideas to life. This discovery solidified my path toward a career in web development. I’ve gained valuable knowledge and skills in frontend and backend development, and I’m eager to apply my abilities in a professional setting.'
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
        { name: 'HTML', icon: 'https://github.com/Kifaa26/images/blob/main/images/icons8-html-48-2.png?raw=true', color: '#e34c26' },
        { name: 'CSS', icon: 'https://github.com/Kifaa26/images/blob/main/images/icons8-css-48-2.png?raw=true', color: '#1572b6' },
        { name: 'JavaScript', icon: 'https://github.com/Kifaa26/images/blob/main/images/icons8-javascript-48-2.png?raw=true', color: '#f7df1e' },
        { name: 'Vue.Js', icon: 'https://github.com/Kifaa26/images/blob/main/images/icons8-vue-js-48-2.png?raw=true', color: '#42b883' },
        { name: 'Node.Js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', color: '#8cc84b' },
        { name: 'MySQL', icon: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg', color: '#00758F' }, 
        { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', color: '#306998' },
        { name: 'Canva', icon: 'https://github.com/Kifaa26/images/blob/main/images/icons8-canva-48.png?raw=true' },  
        { name: 'GitHub', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', color: '#333' },
        { name: 'Figma', icon: 'https://github.com/Kifaa26/images/blob/main/images/icons8-figma-48.png?raw=true' }
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

.skills-title,
.tech-skills-title {
  font-size: 3rem;
  color: whitesmoke;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 5px #000000;
  text-align: center;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 2.5rem; 
  max-width: 90%;
  margin: 10px auto; 
  padding: 3.5rem; 
  justify-items: center; 
  font-family: "Bubbler One", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  text-align: center;

}

.cube {
  width: 150px; 
  height: 150px; 
  background-color: rgba(255, 255, 255, 0.2); 
  border: 2px solid #ccc; 
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px; 
  transition: transform 0.3s; 
}

.cube:hover {
  transform: rotateY(15deg); 
}


.skill-item i {
  font-size: 36px;
  margin-bottom: 10px;
}

/* .skills-section,
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
  font-size: 1.35rem;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
  text-align: center; 
}

.skill-item i,
.tech-skill-item i {
  font-size: 2.5rem;
  text-shadow: 2px 2px 5px #000000;
} */

skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  gap: 2.5rem;
}

.cube {
  width: 150px; 
  height: 150px; 
  background-color: rgba(255, 255, 255, 0.2); 
  border: 2px solid #ccc; 
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px; 
  transition: transform 0.3s; 
}

.cube:hover {
  transform: rotateY(15deg); 
}


.skill-item i {
  font-size: 36px; 
  margin-bottom: 10px; 
}

.tech-skills-section {
  text-align: center; 
}

.tech-skills-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 2rem;
  justify-items: center; 
}

.cube {
  width: 150px; 
  height: 150px; 
  background-color: rgba(255, 255, 255, 0.2); 
  border: 2px solid #ccc;
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1000px; 
  transition: transform 0.3s; 
  font-size: 1.35rem;
}

.cube:hover {
  transform: rotateY(15deg); 
}


.tech-skill-logo {
  width: 50%; 
  margin-bottom: 10px; 
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

 .tech-skills-container {
    grid-template-columns: repeat(4, 1fr); 
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

  .skills-container {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
  }

  .cube {
    width: 120px; 
    height: 120px;
  }

  .tech-skills-container {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
  }

  .cube {
    width: 120px; 
    height: 120px; 
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

  .tech-skills-container {
    grid-template-columns: 2fr; 
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

