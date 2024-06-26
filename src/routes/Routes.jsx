import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import AddJobPage from "../pages/AddJobPage";
import JobDetails from "../components/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import MyPostedJobs from "../pages/MyPostedJobsPage";
import UpdateJobPage from "../pages/UpdateJobPage";
import MyBidsPage from "../pages/MyBidsPage";
import BidRequestsPage from "../pages/BidRequestsPage";

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
      {
        path: "/update-job/:id",
        element: <UpdateJobPage />,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
      {
        path: "/my-posted-jobs",
        element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
      },
      {
        path: "/my-bids",
        element: <PrivateRoute><MyBidsPage /></PrivateRoute>
      },
      {
        path: "/bid-requests",
        element: <PrivateRoute><BidRequestsPage /></PrivateRoute>
      },
      {
        path: "/jobs/:id",
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
    ],
  },
]);

export default router;
