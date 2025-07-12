import { createRouter, createWebHistory } from "vue-router";

import PrivacyView from "../views/PrivacyView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
