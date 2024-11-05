<template>
  <div class="container">
    <h2>Projects</h2>
    <div class="row">
      <div class="col-md-4" v-for="(project, index) in projects" :key="index">
        <div class="card">
          <img v-bind:src="project.image" class="card-img-top" alt="Project Image">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.vercel" target="_blank" class="btn btn-primary m-2">
              <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;">
                <g clip-path="url(#clip0_872_3186)">
                  <circle cx="8" cy="8" r="7.25" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.5L11.5 10.625H4.5L8 4.5Z" fill="var(--ds-gray-100)"></path>
                </g>
                <defs>
                  <clipPath id="clip0_872_3186">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a :href="project.github" target="_blank" class="btn btn-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsSection",
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  mounted() {
    this.$store.dispatch('getProjects');
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

h2 {
    font-size: 3.6rem;
    font-family: "Permanent Marker", cursive;
    padding: 110px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: whitesmoke;
    text-shadow: 2px 2px 5px #000000;
    
}

.card {
  margin-bottom: 20px;
  background-color: #5b85c4c8;
  height: auto;
  min-height: 350px; 
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%; 
  max-width: 300px;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  transform: translateY(-5px); 
}

.card-img-top {
  height: 180px; 
  object-fit: cover; 
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  text-align: center; 
  padding: 10px;
}

.card-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
}

.card-text {
  color: #ffffff;
  font-size: 1rem;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
}

.btn {
  background-color: #000000;
  border-color: #000000;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  box-shadow: 0 4px 8px rgba(255, 254, 254, 0.3);
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 5px; 
}


.col-md-4 {
  flex: 0 0 calc(33.333% - 20px); 
  max-width: calc(33.333% - 20px);
  box-sizing: border-box;
  margin-bottom: 40px;
}

@media (max-width: 1000px) {
  .card {
    min-height: 300px;
    margin: 10px auto;
  }

  .card-img-top {
    height: 150px;
  }

  .card-body {
    padding: 8px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  h2 {
    margin-bottom: 10px; 
  }
}

@media (max-width: 720px) {
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .row {
    display: flex;
    justify-content: center; 
    flex-wrap: wrap;
    width: 100%; 
  }

  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 10px 0; 
    margin-bottom: 40px;
  }

  .card {
    min-height: 250px;
    padding: 2rem;
    margin: auto 0; 
  }

  .card-img-top {
    height: 120px;
  }

  .card-body {
    padding: 0.5rem;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.8rem;
  }

  h2 {
    margin-bottom: 5px; 
  }
}
</style>
