
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import HomeView2 from "../views/HomeView2.vue";
import AdListView from "../views/Ads/AdListView.vue";
import AdView from "../views/Ads/AdView.vue";
import NewAdView from "../views/Ads/NewAdView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import RegistrationView from "../views/Auth/RegistrationView.vue";
import OrdersView from "../views/User/OrdersView.vue";

const routes = [
  {
    path: "/",
    name: "home2",
    component: HomeView2,
  },
  {
    path: "/more",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ad/:id",
    name: "ad",
    component: AdView,
  },
  {
    path: "/list",
    name: "list",
    component: AdListView,
  },
  {
    path: "/new",
    name: "newAd",
    component: NewAdView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/registration",
    name: "reg",
    component: RegistrationView,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path:"/ad/:id",
    props: true,
    name:"ad",
    component:AdView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;