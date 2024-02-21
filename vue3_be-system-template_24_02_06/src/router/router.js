import { createRouter, createWebHashHistory } from "vue-router";

const HomePage = () => import("../view/HomePage/index.vue");
const EchartPage = () => import("../view/EchartPage/index.vue");
const BackEndPage = () => import("../view/BackEndPage/index.vue");

// 后台系统子页面
const tableComponent = () => import("../view/BackEndPage/TableComponent/index.vue");

const routes = [
  { path: "/", component: HomePage },
  { path: "/bigScreen", component: EchartPage },
  {
    path: "/backendSystem",
    component: BackEndPage,
    children: [
      {
        path: "/tableComponent",
        component: tableComponent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
