import { createApp } from 'vue'
import App from './views/ZombiePage.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
