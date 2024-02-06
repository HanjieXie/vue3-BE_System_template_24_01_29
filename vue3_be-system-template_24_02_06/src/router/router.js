import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("../components/HomePage/Home.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
});

const app = Vue.createApp({});
app.use(router);

app.mount("#app");