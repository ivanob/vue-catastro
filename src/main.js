// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Portada from './components/Portada';
import VueRouter from 'vue-router'
import Preguntas from './components/Preguntas';
import Informacion from './components/Informacion';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Portada },
  { path: '/informacion', component: Informacion },
  { path: '/preguntas', component: Preguntas }
]

const router = new VueRouter({
  routes // short for routes: routes
})
/*
const app = new Vue({
  router,
  el: '#app',
  template: '<Portada/>',
  components: { Portada }
}).$mount('#app')*/

/* THIS IS POINTING TO APP (add the include) */
const app = new Vue({
  router,
  el: '#app',
  template: '<app/>',
  components: { App }
}).$mount('#app')


/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  template: '<Portada/>',
  components: { Portada },
});*/
