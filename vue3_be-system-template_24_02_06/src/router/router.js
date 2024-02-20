import { createRouter, createWebHashHistory } from "vue-router";

const HomePage = () => import("../view/HomePage/index.vue");
const EchartPage = () => import("../view/EchartPage/index.vue");
const BackEndPage = () => import("../view/BackEndPage/index.vue");

const routes = [
  { path: "/", component: HomePage },
  { path: "/bigScreen", component: EchartPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
