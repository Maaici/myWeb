import { createRouter, createWebHashHistory } from "vue-router";
const route = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "index",
      path: "/index",
      component: () => import("../pages/index/index.vue"),
      meta: {
        title: "Maici-首页",
      },
    },
    {
      name: "home",
      path: "/",
      component: () => import("../pages/home/index.vue"),
      meta: {
        title: "Maici-home",
      },
      children: [
        {
          name: "about",
          path: "/",
          component: () => import("../pages/home/about.vue"),
          meta: {
            title: "about",
          },
        },
        {
          name: "about",
          path: "/about",
          component: () => import("../pages/home/about.vue"),
          meta: {
            title: "about",
          },
        },
        {
          name: "project",
          path: "/project",
          component: () => import("../pages/home/project.vue"),
          meta: {
            title: "project",
          },
        },
        {
          name: "blog",
          path: "/blog",
          component: () => import("../pages/home/blog.vue"),
          meta: {
            title: "blog",
          },
        },
        {
          name: "list100",
          path: "/list100",
          component: () => import("../pages/home/list100.vue"),
          meta: {
            title: "list100",
          },
        },
      ],
    },
  ],
});

export default route;
