<template>
  <div id="contact">
    <section class="contact-section">
      <div class="contact-content">
        <div class="contact-form-wrapper">
          
          <form action="https://formspree.io/f/xpwaeybe" method="POST" class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div class="contact-info">
            <h3>Get in Touch</h3>
            <p>
              <strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </strong> Lotus River, Cape Town
            </p>
            <p>
              <strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
              </strong> 060 939 0467
            </p>
            <p>
              <strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                </svg>
              </strong> akifahpalekar@gmail.com
            </p>
            <div class="social-links">
            <a href="https://www.linkedin.com/in/aakifah-palekar-8a003728b/" class="btn btn-primary me-2" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Kifaa26" class="btn btn-dark me-2" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactUsView'
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Playfair Display", serif;
  color: #333;
}

#contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contact-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(90deg, rgb(54, 97, 146) 20%, rgba(130, 175, 228, 0.925) 100%);
}

.contact-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
}

.contact-form-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* .contact-text h2 {
  font-size: 2.8rem;
  margin: 0;
  padding-top: 100px;
  padding-bottom: 20px;
  color: whitesmoke;
  text-align: center;
  font-family: "Permanent Marker", cursive;
  text-shadow: 2px 2px 5px #000000;
} */

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 160%;
  margin: 0;
  padding: 100px;
  padding-left: 150px;
  font-family: "Bubbler One", sans-serif;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
}

.contact-form label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.contact-form input, 
.contact-form textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.contact-form button {
  padding: 1rem;
  background-color: #134197;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
}

.contact-form button:hover {
  background-color: #5091e6;
}

.contact-info {
  flex: 1;
  padding: 2rem;
  color: whitesmoke;
  text-shadow: 2px 2px 5px #000000;
  font-family: "Bubbler One", sans-serif;
  padding: 250px;
  padding-right: 100px;
}

.contact-info h3 {
  font-size: 1.9rem;
  margin-bottom: 1rem;
  font-family: "Permanent Marker", cursive;
}

.contact-info p {
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

.contact-info a {
  color: #fff;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  color: #ffffff;
  border-radius: 4px;
  padding: 0.8rem;
  transition: background-color 0.3s, color 0.3s;
}

.social-links a:hover {
  background-color: #ffffff7a;
  color: #000000;
}

.btn-primary {
  background-color: #0d335c;
}

.btn-primary:hover {
  background-color: #0d335c;
}

.btn-dark {
  background-color: #000000;
}

.btn-dark:hover {
  background-color: #000000;
}

@media only screen and (max-width: 600px) {
  .contact-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 2rem; 
  }
  .contact-info {
    padding: 1rem;
    text-align: center;
    margin-top: 1rem; 
  }
  .contact-form {
    padding: 5rem 0;
    width: 120%; 
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .contact-form {
    padding: 1rem;
    width: 120%;
  }
  .contact-info {
    padding: 1.5rem;
    text-align: center;
  }
}

@media only screen and (min-width: 1024px) {
  .contact-content {
    flex-direction: row;
    gap: 4rem;
  }
  .contact-form {
    padding: 100px 150px;
    width: 160%;
  }
}

</style>