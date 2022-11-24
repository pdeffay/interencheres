import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Sale from "@/components/sales/Sale.vue";
import Sales from "@/components/sales/Sales";
import Add from "@/components/sales/Add.vue";
import Category from "@/components/categories/Category.vue";
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
        component: Sale,
        children: [
            
        ]
    },
    {
        path: "/sales",
        name: "sales",
        component: Sales
    },
    {
        path: "/new/sale",
        name: "add",
        component: Add
    },
    {
        path: "/search",
        name: "search",
        component: SearchResult
    },
    {
        path: "/category/:slug",
        name: "category",
        component: Category
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});
export default router;