import App from "@/App";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/dashboard/Dashboard";
import UserPage from "@/pages/users/UserPage";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <App />,
        // loader: teamLoader,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
    ],
  },
]);

export default appRouter;
