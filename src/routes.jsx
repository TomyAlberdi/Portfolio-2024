import { Navigate, useRoutes } from "react-router-dom"
import BasicLayout from './layout/BasicLayout';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import TechStack from './pages/TechStack/TechStack';
import Contact from './pages/Contact/Contact';
const CustomRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <BasicLayout />,
      children: [{
        index: true,
        element: <Home />
      }]
    },
    {
      path: "/Projects",
      element: <BasicLayout />,
      children: [{
        index: true,
        element: <Projects />
      }]
    },
    {
      path: "/Experience",
      element: <BasicLayout />,
      children: [{
        index: true,
        element: <Experience />
      }]
    },
    {
      path: "/Stack",
      element: <BasicLayout />,
      children: [{
        index: true,
        element: <TechStack />
      }]
    },
    {
      path: "/Contact",
      element: <BasicLayout />,
      children: [{
        index: true,
        element: <Contact />
      }]
    },
    {
      path: "*",
      element: <Navigate to={"/"} />
    }
  ])
}

export default CustomRouter