import { createRouter, createWebHistory,createWebHashHistory } from "vue-router"
import { defineAsyncComponent } from "vue"

const home = defineAsyncComponent(() => import('../App.vue'))
const about = defineAsyncComponent(() => import('../pages/about.vue'))

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                title: '首页'
            }
        },{
            path: '/list',
            name: 'list',
            component: about,
            meta: {
                title: '关于'
            }
        },{
            path: '/*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to,form,next)=>{
    if(to.meta.title){
        document.title = '${to.meta.title}';
    }
    next()
})

router.afterEach((to,from)=>{
    console.log('afterEach')
})

export default router