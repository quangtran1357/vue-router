import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/Home.vue'
import TeamPage from './pages/Team.vue'
import TeamDetailPage from './pages/TeamDetail.vue'
import TeamSuperPage from './pages/TeamSuper.vue'
// import UserPage from './pages/User.vue'
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App)

const routes = [
    { path: '/', name: 'home', component: HomePage },
    {
        path: '/teams/super', 
        name: 'teams-super',
        component: TeamSuperPage
    },
    // Nested Routes
    {
        path: '/teams', 
        name: 'teams',
        component: TeamPage,
        children: [
            {
                path: ':id', 
                name: 'teamDetail',
                component: TeamDetailPage,
            }
        ]
    },
    // { path: '/teams', name: 'teams', component: TeamPage },
    // { path: '/teams/:id', name: 'teamDetail',component: TeamDetailPage },
    // { path: '/teams/:id/learn', name: 'teamDetail',component: TeamDetailPage },
    // { path: '/teams/:id/learn/:learnName', name: 'teamDetail',component: TeamDetailPage },
    // { path: '/users', name: 'users', component: UserPage, meta: {requireAuth: true} }
    // { path: '/teams', name: 'teams', component: () => import( /* webpackChunkName: 'teams' */ './pages/Team.vue') },
    // { path: '/teams/:id', name: 'teamDetail',component: () => import( /* webpackChunkName: 'team-detail' */ './pages/TeamDetail.vue') },
    { path: '/users', name: 'users', component: () => import( /* webpackChunkName: 'users' */ './pages/User.vue') },
    { path: '/:404(.*)', name: '404', component: () => import( /* webpackChunkName: '404' */ './pages/404.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'custom-link-active',
    linkExactActiveClass: 'custom-link-exact-active',
    //Router: Scroll Behavior
    scrollBehavior(to) {
        if (to.fullPath === '/users') {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
        // always scroll to top
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

//Router: Navigation Guards
router.beforeEach((to, from, next) => {
    console.log(from, next)
    console.log(to.meta && to.meta.requireAuth)
    //next => Lưu ý luôn phải call ít nhất 1 lần để return
    if (to.meta && to.meta.requireAuth) {
        // check authentication (kiểm tra xác thực)
        const auth = false
        // console.log(auth)
        // if (auth) {
        //     return true
        // } else {
        //     return '/login'
        // }
        if (auth) {
            next()
        } else {
            next({name: 'home'})
        }
    }
    next()
})



app.use(router);
// Vue register two global variable: $router, $route

app.mount('#app');
