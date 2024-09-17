<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <span class="logo-main">AP.</span>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/aboutMe">About Me</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/education&experience">Education & Experience</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/projects">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contactMe">Contact Me</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.navbar {
  padding: 20px 30px;
  font-family: "Bubbler One", sans-serif;
  z-index: 1030; 
  position: fixed !important;
  width: 100vw !important;
  background: linear-gradient(90deg, rgb(54, 97, 146)20%, rgba(130, 175, 228, 0.925)100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  font-size: 1.3rem;
}

.navbar-brand .logo {
  height: 50px; 
}

.navbar-nav .nav-link {
  font-weight: bold;
  color: #fff;
  position: relative; 
  text-decoration: none;
  transition: color 0.3s ease;
  text-shadow: 2px 2px 5px #00000088;
}

.navbar-nav .nav-link {
  font-weight: bold;
  color: #fff;
  position: relative;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 10px 15px;
  border-radius: 3px;
  align-content: center;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  background-color: rgba(255, 255, 255, 0.247); 
  border-radius: 8px 8px 8px 8px;
}

@media (max-width: 767.98px) {
  .navbar-nav {
    margin-top: 10px;
  }
}

.logo {
  text-align: center;
}

.logo-main {
  display: block;
  font-size: 30px; 
  font-weight: bold;
  color: #fff; 
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #000000;
}

.logo-sub {
  display: block;
  font-size: 16px; 
  color: #fff; 
  margin-top: -5px; 
  font-weight: normal;
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #000000;
}
</style>