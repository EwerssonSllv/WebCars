import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { New } from "./pages/dashboard/new";
import { Dashboard } from "./pages/dashboard";
import { Detail } from "./pages/car";
import { Layout } from "./components/layout";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/car/:id",
        element: <Detail />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/new",
        element: <New />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

export { router }