import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Banner from "../../pages/Banner/Banner";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import AboutMyself from "../../pages/Home/AboutMySelf/AboutMyself";
import Home from "../../pages/Home/Home/Home";
import Projects from "../../pages/Home/Projects/Projects/Projects";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) => fetch(`data.json/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/about",
        element: <AboutMyself></AboutMyself>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
