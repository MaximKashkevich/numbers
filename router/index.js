import { createRouter, createWebHistory } from "vue-router";
import number from "@/components/number.vue";

const routes = [
  {
    path: "/number/:id",
    name: "number",
    component: number,
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
