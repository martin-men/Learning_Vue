import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            path: '/teams',
            name: 'teams',
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                // When props is true, it means that the route params will be passed as props to the component
                { path: ':teamId', name: 'team-members', component: TeamMembers, props: true },
            ],
            meta: { needsAuth: true }
        },
        {
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                console.log('Users beforeEnter')
                console.log(to, from)
                next()
            }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition)

        // This is to scroll to the saved position when the user navigates back to the previous page
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 0 }
    }
})

// This function will execute before we navigate from one page to another
router.beforeEach((to, from, next) => {
    console.log('Global beforeEach')
    console.log(to, from)
    if (to.meta.needsAuth) {
        console.log('Needs auth!')
        next(false)
        return
    }
    // next() will allow the navigation to continue
    // next(false) will prevent the navigation
    // next('/') will redirect to the home page
    // next({ name: 'team-members', params: { teamId: 't2' } }) will redirect to the team-members page with the teamId as t2
    next()
})
router.afterEach((to, from) => {
    console.log('Global afterEach')
    console.log(to, from)
})

export default router
