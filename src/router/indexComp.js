import { createRouter, createWebHistory } from 'vue-router'
//import { createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/views/LoginView.vue'),
    },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: () => import('../views/BlogView.vue')
    // },
    {
      path: '/nouveau-texte',
      name: 'nouveau-texte',
      component: () => import('../views/NewTextView.vue')
    },
    // {
    //   path: '/rect',
    //   name: 'rect',
    //   component: () => import('../components/RectComp.vue')
    // },
  ]


const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior (savedPosition) {
      return savedPosition || new Promise((resolve)=>{
          // setTimeout pour conter le temps de transition css et behavior possible
          //setTimeout(()=>resolve({top:0, behavior:'smooth'}), 1000)
          setTimeout(()=>resolve({top:0}), 1000)
      })
  }
})

router.beforeEach((to)=>{
  if(to.meta.requiresAuth  && !window.user){
      return {name: 'login'}

  }
})
export default router
