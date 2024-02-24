import { Navigate, useRoutes } from "react-router-dom"
import BasicLayout from './layout/BasicLayout';
import Home from './pages/Home/Home';
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
      path: "*",
      element: <Navigate to={"/"} />
    }
  ])
}

export default CustomRouter