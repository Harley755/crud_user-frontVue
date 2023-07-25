import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

createApp(App).use(router).mount('#app')
