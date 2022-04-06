import { createApp } from 'vue'
import App from './App.vue'
import routerComp from './router/indexComp'

const app = createApp(App)

app.use(routerComp)

app.mount('#app')
