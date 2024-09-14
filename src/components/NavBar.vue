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
                            <router-link class="nav-link" to="/eductation&experience">Eductation & Experience</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/projects">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
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
  font-family: "Playfair Display", serif;
  z-index: 1030; 
  position: fixed !important;
  width: 100vw !important;
  background: linear-gradient(90deg, rgba(222, 169, 247, 0.9) 20%, rgb(160, 102, 187) 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
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

.navbar-nav .nav-link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 1px; 
  height: 2px; 
  width: 0;
  background-color: #ffffff; 
  transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
  width: 70%;
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