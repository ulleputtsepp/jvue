import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (todo.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "todo" */ "./views/Todo.vue")
    },
    {
      path: "/learn",
      name: "learn",
      // route level code-splitting
      // this generates a separate chunk (learn.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "learn" */ "./views/Learn.vue")
    },
    {
      path: "/example",
      name: "example",
      // route level code-splitting
      // this generates a separate chunk (example.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "example" */ "./views/Example.vue")
    },
    {
      path: "/resources",
      name: "resources",
      // route level code-splitting
      // this generates a separate chunk (resources.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "resources" */ "./views/Resources.vue")
    },
    {
      path: "/game",
      name: "game",
      // route level code-splitting
      // this generates a separate chunk (game.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "game" */ "./views/Game.vue")
    },
    {
      path: "/feedback",
      name: "feedback",
      // route level code-splitting
      // this generates a separate chunk (feedback.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "feedback" */ "./views/Feedback.vue")
    }
  ]
});
