import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NewDetail from '@/views/NewDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NewDetail/:id',
    name: 'NewDetail',
    component: NewDetail
  },
  {
    path:'*',
    component:{
      render(){
        return <h1>404</h1>
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
