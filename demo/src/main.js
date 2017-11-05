import Vue from 'vue'
import layout from  './components/layout'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import IndexPage from  './pages/index'
Vue.use(VueRouter);
Vue.use(VueResource);
//根实例
/* eslint-disable no-new */


//vue-resource

//实例化router
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})

new Vue({
    el: '#app',
     router:router,
    template: "<layout/>",
    components: {layout}
  }
)
