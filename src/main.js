import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './general.css'
import './queries.css'
import router from './router'
import Icon from './components/icon.vue'

const app = createApp(App)
app.component("TIcon",Icon)
app.use(router)
app.mount('#app')
