import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@//components/Home.vue";
import Sale from "@//components/sales/Sale.vue";
import Add from "@//components/sales/Add.vue";
import SearchResult from "@/components/search/SearchResult";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/sale/:id",
        name: "sale",
        component: Sale
    },
    {
        path: "/sale/new",
        name: "add",
        component: Add
    },
    {
        path: "/search",
        name: "search",
        component: SearchResult
    }
    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;