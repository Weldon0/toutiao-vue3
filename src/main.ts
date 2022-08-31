import {createApp} from 'vue'
import './styles/index.css'
import App from './App.vue'
// 集成pinia
import {createPinia} from "pinia";

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app')
