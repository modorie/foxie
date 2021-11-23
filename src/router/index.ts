import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import MovieDetail from "../views/MovieDetail.vue";
import Review from "../views/Review.vue";
import Community from "../views/Community.vue";
import CommunityNew from "../views/CommunityNew.vue";
import CommunityDetail from "../views/CommunityDetail.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/accounts/Signup.vue";
import Login from "../views/accounts/Login.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie,
    },
    {
      path: "/movie/:id",
      name: "MovieDetail",
      component: MovieDetail,
    },
    {
      path: "/review",
      name: "Review",
      component: Review,
    },
    {
      path: "/community",
      name: "Community",
      component: Community,
    },
    {
      path: "/community/new",
      name: "CommunityNew",
      component: CommunityNew,
    },
    {
      path: "/community/:id",
      name: "CommunityDetail",
      component: CommunityDetail,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },

    { path: "*", redirect: "/" },
  ],
});

// // DEV 환경에선 잠시 막아두겠음
// router.beforeEach((to, from, next) => {
//   const publicPages = ["/", "/login", "/signup", "/movie", "/community"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }

//   next();
// });

export default router;
