import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import CatDetail from "@/views/CatDetail";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
    path: '/cat/:id',
        name: 'CatDetail',
        component: CatDetail,
    }
]


const router = new VueRouter({routes});

export default router;