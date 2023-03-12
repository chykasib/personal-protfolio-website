import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import AboutMyself from "../../pages/Home/AboutMySelf/AboutMyself";
import Home from "../../pages/Home/Home/Home";
import ProjectDetails from "../../pages/Home/ProjectDetails/ProjectDetails";

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
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => fetch(`data.json/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
