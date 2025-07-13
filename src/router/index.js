import { createRouter, createWebHistory } from "vue-router";

import PrivacyView from "../views/PrivacyView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  mode: "history",
});

export default router;
