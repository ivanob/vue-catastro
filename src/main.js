// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Portada from './components/Portada';
import VueRouter from 'vue-router'
import Preguntas from './components/Preguntas';
import Informacion from './components/Informacion';
import Catastro from './components/Catastro';
import Valle from './components/Valle';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Portada },
  { path: '/informacion', component: Informacion },
  { path: '/preguntas', component: Preguntas },
  { path: '/valle', component: Valle },
  { name: 'catastro', path: '/catastro', component: Catastro },
  { path: '*', component: Portada }
]

const router = new VueRouter({
  //mode: 'history',
  routes // short for routes: routes
})

/* THIS IS POINTING TO APP (add the include) */
const app = new Vue({
  router,
  el: '#app',
  template: '<app/>',
  components: { App }
}).$mount('#app')
