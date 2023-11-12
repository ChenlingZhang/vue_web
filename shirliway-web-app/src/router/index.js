import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FinishedView from '../views/FinishedView.vue'
import LifeStyleView from '../views/LifeStyleView.vue'
import LookbookView from '../views/LookbookView.vue'
import MarbleView from '../views/MarbleView.vue'
import PagenniTechView from '../views/PagenniTechView.vue'
import PattrenView from '../views/PattrenView.vue'
import PerformanceView from '../views/PerformanceView.vue'
import SoildColorView from '../views/SoildColorView.vue'
import VisionCaseView from '../views/VisionCaseView.vue'
import WoodView from '../views/WoodView.vue'

const orginal = VueRouter.prototype.push

VueRouter.prototype.push = function push(location){
  return orginal.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/wood',
    name:'wood',
    component: WoodView
  },
  {
    path:'/vision_case',
    name:'vision case',
    component: VisionCaseView
  },
  {
    path:'/soild_color',
    name:'soild color',
    component: SoildColorView
  },
  {
    path:'/performance',
    name:'performance',
    component: PerformanceView
  },
  {
    path:'/pattren',
    name:'pattren',
    component: PattrenView
  },
  {
    path:'/pagenni-tech',
    name:'Pagenni Tech',
    component: PagenniTechView
  },
  {
    path:'/marble',
    name:'marble',
    component: MarbleView
  },
  {
    path:'/lookbook',
    name:'Look Book',
    component: LookbookView
  },
  {
    path:'/lifestyle',
    name:'Life Style',
    component: LifeStyleView
  },
  {
    path:'/finished',
    name:'Finished',
    component: FinishedView
  }
]

const router = new VueRouter({
  routes
})

export default router
