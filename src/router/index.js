import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/servicos",
    name: "servicos",
    component: () => import("../views/Servicos.vue"),
  },
  {
    path: "/formacao",
    name: "formacao",
    component: () => import("../views/Formacao.vue"),
  },
  {
    path: "/workshops",
    name: "workshops",
    component: () => import("../views/Workshops.vue"),
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/Sobre.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
