import App from "@/App";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/dashboard/Dashboard";
import UserPage from "@/pages/users/UserPage";
import { createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    ),
    children: [
      {
        path: "/",
        element: <App />,
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
