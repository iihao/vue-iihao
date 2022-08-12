import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
 
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../views/login/index.vue"),
  },
  {
    path: "/",
    name: "index",
    component: () =>
      import( "../layout/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
