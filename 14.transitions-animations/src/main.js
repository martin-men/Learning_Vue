import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AllUsers
        },
        {
            path: '/goals',
            component: CourseGoals
        }
    ]
})

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router)

// To avoid strange behaviors related to vue router, like transitions at the initial render of the web app
router.isReady().then(() => {
    app.mount('#app');
})
