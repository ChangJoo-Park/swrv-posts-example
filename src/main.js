import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import One from './components/one.vue'
import Another from './components/another.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import App from './App.vue'

const routes = [
  { path: '/', component: One },
  { path: '/another', component: Another }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
