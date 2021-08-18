import About from "../pages/About";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const PrivateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: Post, exact: true }
];

export const PublicRoutes = [{ path: "/login", component: Login, exact: true }];
