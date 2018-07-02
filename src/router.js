import Vue from "vue";
import Router from "vue-router";
import Test from "./components/Test.vue";
import About from "./components/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "test",
      component: Test
    },
    {
      path: "/about/:name",
      name: "about",
      component: About
    }
  ]
});
