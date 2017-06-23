import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './store/store'
import Routes from './routes'

Vue.use(VueRouter);

export const bus = new Vue();

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    store.state.messages = [];
    next();
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
