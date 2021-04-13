import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../components/Gallery.vue";
import Hero from "../components/Hero.vue";
import LatestPost from "../components/LatestPost.vue";
import Header from "../views/Header.vue";
import History from "../components/History.vue";
import Footer from "../views/Footer.vue";
import Landing from "../components/Landing.vue";
import Navbar from "../components/Navbar.vue";
import Contacts from "../components/Contacts";
import page from "../components/page.vue";
import Services from "../components/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "page",
    component: page
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/Contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/History",
    name: "History",
    component: History
  },
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/Services",
    name: "Services",
    component: Services
  },
  {
    path: "/Hero",
    name: "Hero",
    component: Hero
  },
  {
    path: "/LatestPost",
    name: "LatestPost",
    component: LatestPost
  },
  {
    path: "/Landing",
    name: "Landing",
    component: Landing,
    children: [
      {
        path: "/Hero",
        name: "Hero",
        component: Hero
      }
    ]
  },
  {
    path: "/Header",
    name: "Header",
    component: Header
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
