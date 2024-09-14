import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
