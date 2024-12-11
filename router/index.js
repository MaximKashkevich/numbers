import { createRouter, createWebHistory } from "vue-router";
import PlateNUmberCard from "@/components/PlateNUmberCard.vue";
import Catalog from "../components/Catalog.vue";

const routes = [
  {
    path: "/PlateNUmberCard/:id",
    name: "PlateNUmberCard",
    component: PlateNUmberCard,
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
