import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import AddJobPage from "../pages/AddJobPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/add-job",
        element: <AddJobPage />,
      },
    ],
  },
]);

export default router;
