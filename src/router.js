import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/components/AppHome.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: AppHome },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
