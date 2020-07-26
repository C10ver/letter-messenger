import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '../components/Login.vue';
import Main from '../components/Main.vue';
import Contacts from '../components/Contacts.vue';
import Chat from '../components/Chat.vue';
import state from '../store/index';
import store from '../store/index';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [{
      path: '/',
      redirect: 'contacts',
    },
    {
      path: 'contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: 'chat',
      component: Chat,
      props: true,
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = store.state.currentUser.name;
  if(to.name != 'Login' && !isAuth) next({name: 'Login'});
  else if (to.name == 'Login' && isAuth) next({name: 'contacts'});
  else next();
});

export default router;
