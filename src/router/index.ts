import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import("../views/overview") },
  { path: "/integrations", component: () => import("../views/integrations") },
  { path: "/usage", component: () => import("../views/usage") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
