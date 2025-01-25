import LinkList from "../components/LinkList.vue"
import AddLink from "../components/AddLink.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "LinkList",
        path: "/",
        component: LinkList
    },
    {
        name: "AddLink",
        path: "/add_link",
        component: AddLink, LinkList
    },
    {
        name: "Default",
        path: "/default",
        compnent: ""
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;