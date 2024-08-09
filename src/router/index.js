import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import InfoView from '../views/InfoView.vue'
import EmployeeView from '../views/EmployeeView.vue';
import ApiView from '../views/ApiView.vue';

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
    {
        path: '/employee',
        name: 'employeeView',
        component: EmployeeView
    },
    {
        path: '/api',
        name: 'api',
        component: ApiView
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router