import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue';
import Main from '../views/Main.vue';
import Order from '../views/Order.vue';
import MyOrder from '../views/MyOrder.vue';
import Rate from '../views/Rate.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[{
      path: 'main',
      name: 'Main',
      component: Main
    },{
      path: 'order',
      name: 'Order',
      component: Order
    },{
      path: 'myOrder',
      name: 'MyOrder',
      component: MyOrder
    },{
      path: 'rate',
      name: 'Rate',
      component: Rate
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
