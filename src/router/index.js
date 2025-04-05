import Test from "@/pages/Test.vue";
import Dashboard from "@/pages/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";
import StatusManage from "@/pages/StatusManage.vue";
import StatusCreate from "@/pages/StatusCreate.vue";
import StatusUpdate from "@/pages/StatusUpdate.vue";





const routes = [
    { path: '/', component: Dashboard },
    {path: '/test', component: Test},
    {path: '/status', component:StatusManage},
    {path:'/status/create', component:StatusCreate},
    {path:'/status/edit/:id', component:StatusUpdate},
    
  ]


const router = createRouter({
history: createWebHistory(),
routes,
})


export default router;
  