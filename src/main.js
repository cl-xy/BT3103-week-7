import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'

//Import & use VueRouter
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)

//Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')