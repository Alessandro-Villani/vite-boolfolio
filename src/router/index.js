import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/pages/HomePage.vue';
import ProjectPage from '../components/pages/ProjectPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

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
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundPage
        }
    ]
});

export {router};