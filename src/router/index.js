import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

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
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUsView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  mode: "history",
});

export default router;
