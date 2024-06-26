// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Checkout from "@/components/Checkout.vue";
import OrderCompleted from "@/components/OrderCompleted.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/checkout/:offerCode",
      name: "Checkout",
      component: Checkout,
      props: true
    },
    {
      path: "/order-completed",
      name: "OrderCompleted",
      component: OrderCompleted
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
