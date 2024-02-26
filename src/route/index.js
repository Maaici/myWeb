import { createRouter, createWebHashHistory } from "vue-router"
const route = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: "index",
            path: '/',
            component: () => import("../pages/index/index.vue") ,
            meta: {
                title: 'Maici-首页'
            }
        }, {
            name: "blog",
            path: '/blog',
            component: () => import("../pages/artices/index.vue") ,
            meta: {
                title: 'Maici-blog'
            }
        },
       
    ]
})
export default route