import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "../components/Login-Form.vue";
import Home from "../components/Home.vue";
import Students from "../components/Students.vue";
import Archive from "../components/Archive.vue";
import Help from "../components/help.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginForm,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/students",
      name: "students",
      component: Students,
      children: [
        {
          path: ":id",
          component: Students,
        },
      ],
    },
    {
      path: "/archive",
      name: "archive",
      component: Archive,
    },
    {
      path: "/help",
      name: "help",
      component: Help,
    },
  ],
});

export default router;
