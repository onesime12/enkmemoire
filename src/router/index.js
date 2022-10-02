import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AchatView from "../views/AchatView.vue";
import RechargeView from "../views/RechargeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/achat",
    name: "achat",
    component: AchatView,
  },
  {
    path: "/recharge",
    name: "recharge",
    component: RechargeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
