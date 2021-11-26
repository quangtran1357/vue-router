import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/Home.vue'
import TeamPage from './pages/Team.vue'
import TeamDetailPage from './pages/TeamDetail.vue'
import UserPage from './pages/User.vue'
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App)

const routes = [
    { path: '/', component: HomePage },
    { path: '/teams', component: TeamPage },
    { path: '/teams/:id',component: TeamDetailPage },
    { path: '/users', component: UserPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'custom-link-active',
    linkExactActiveClass: 'custom-link-exact-active'
})

app.use(router);
// Vue register two global variable: $router, $route

app.mount('#app');
