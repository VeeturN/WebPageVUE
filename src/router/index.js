import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import InfoView from '../views/InfoView.vue'

const routes=[
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
      },
    {
        path: '/info',
        name: 'info',
        component: InfoView
      },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router