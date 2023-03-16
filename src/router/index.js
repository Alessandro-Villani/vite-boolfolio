import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import ProjectPage from '../components/pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/projects/:id',
            name: 'ProjectDetails',
            component: ProjectPage
        }
    ]
});

export {router};