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
      <div class="image-container">
        <img src="https://github.com/Kifaa26/images/blob/main/images/code.jpg?raw=true" alt="Coding Image" class="about-image" loading="lazy" />
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
          <i :class="getTechIconClass(skill.name)" :style="{ color: skill.color }"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>

   <section class="hobbies-section" v-if="hobbies && hobbies.length">
    <h3 class="hobbies-title">Hobbies</h3>
    <div class="hobbies-container">
      <div v-for="hobby in hobbies" :key="hobby.name" class="hobby-item">
        <img :src="hobby.image" :alt="hobby.name" class="hobby-image">
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
        description: 'I am a passionate software developer with a deep curiosity for the technologies behind software creation. From a young age, I’ve been fascinated by how apps and websites are made, and in high school, I discovered coding as the key to bringing these applications to life. This discovery solidified my path toward a career in Information Technology. I’ve gained valuable knowledge and skills in app and web development, and I’m eager to demonstrate my abilities in a professional setting. I thrive in relaxed, harmonious environments where camaraderie is valued, and laughter is abundant. While I enjoy light-hearted moments, I understand the importance of focus and diligence when it comes to work. I take pride in fostering a positive atmosphere, especially during tense situations, and I’m driven by the belief that motivating and being motivated are essential to achieving success and completing tasks.'
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
        { name: 'HTML', icon: 'fa-html5', color: '#e34c26' },
        { name: 'CSS', icon: 'fa-css3-alt', color: '#1572b6' }, 
        { name: 'JavaScript', icon: 'fa-js-square', color: '#f7df1e' }, 
        { name: 'Vue.Js', icon: 'fa-vuejs', color: '#42b883' }, 
        { name: 'Node.Js', icon: 'fa-node-js', color: '#8cc84b' }, 
        { name: 'MySQL', icon: "fa-solid fa-database", style:"color: #74C0FC" }, 
        { name: 'Canva', icon: 'fa-paint-brush', color: '#00c4cc' }, 
        { name: 'GitHub', icon: 'fa-github', color: '#333' } 
      ],
      hobbies: [
        { name: 'Reading', image: 'https://github.com/Kifaa26/images/blob/main/images/books.jpg?raw=true' },
        { name: 'Hiking', image: 'https://github.com/Kifaa26/images/blob/main/images/hiking%202.jpg?raw=true' },
        { name: 'Gyming', image: 'https://github.com/Kifaa26/images/blob/main/images/gym.jpg?raw=true' },
        { name: 'Family time', image: 'https://github.com/Kifaa26/images/blob/main/images/family%203.jpg?raw=true' }
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
  justify-content: space-between;
  padding: 8rem;
}

.text-container {
  font-family: "Bubbler One", sans-serif;
  max-width: 60%;
}

.image-container {
  max-width: 35%;
}

.about-image {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  margin: 20px;
  margin-top: 100px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fun-block {
  border: 4px double #000000;
  border-radius: 10px;
  padding: 1rem;
  max-width: 800px;
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
  justify-items: center;
}

.skills-title,
.tech-skills-title {
  font-size: 3rem;
  color: whitesmoke;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 1rem;
}

.skills-container,
.tech-skills-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem;
  max-width: 800px; 
  margin: 20px auto; 
  padding: 3.5rem;
}

.skill-item,
.tech-skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
}

.skill-item i,
.tech-skill-item i {
  font-size: 2.3rem;
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
  flex-wrap: nowrap; 
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
</style>