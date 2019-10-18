import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index.vue'
import Login from './views/Login.vue';
import Registration from './views/Registration'

import Search from './components/appXM/Search.vue'
import searchone from './components/appXM/searchone'
import Swipe from './components/appXM/Swipe.vue'
import filmimage from './components/appXM/filmimage.vue'
import filmage from './components/appXM/filmage.vue'
import filmOne from './components/appXM/filmOne';
import Moviecopy from './components/appXM/Moviecopy';
import slidefont from './components/appXM/slidefont'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'home',component: Home},
    {path:'/Search',component:Search},
    {path:'/index',component:Home},
    {path:'/Swipe',component:Swipe},
    {path:'/searchone',component:searchone},
    {path:'/filmimage',component:filmimage},
    {path:'/filmage',component:filmage},
    {path:'/Login',component:Login},
    {path:'/Registration',component:Registration},
    {path:'/filmOne',component:filmOne},
    {path:'/Moviecopy',component:Moviecopy},
    {path:'/slidefont',component:slidefont}
  ]
})
