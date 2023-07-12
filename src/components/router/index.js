import { createWebHistory, createRouter } from "vue-router";
import FirstComponent from "./FirstComponent.vue";
import SecondComponent from "./SecondComponent.vue";

const routes = [
  { path: "/post", name: "post", component: FirstComponent },
  { path: "/:postDetail", name: "postDetail", component: SecondComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
