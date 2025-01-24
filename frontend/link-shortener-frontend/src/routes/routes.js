import "../components/LinkList"
import "../components/AddLink"
import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        name: "LinkList",
        path: "/",
        component: "AddLink"
    },
    {
        name: "AddLink",
        path: "/add_link",
        component: "AddLink"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;