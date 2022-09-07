import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '@/views/DashBoard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import BreakPoints from '@/views/BreakPoints'
import TypoGraphy from '@/views/TypoGraphy'
import Tables from '@/views/TablesV'
import Forms from '@/views/FormsV'
import Buttons from '@/views/ButtonsV'
import Icons from '@/views/IconsV'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage
  },
  {
    path: '/break-points',
    name: 'BreakPoints',
    component: BreakPoints
  },
  {
    path: '/typography',
    name: 'TypoGraphy',
    component: TypoGraphy
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
