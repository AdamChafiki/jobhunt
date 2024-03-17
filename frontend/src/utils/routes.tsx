import { createBrowserRouter } from "react-router-dom";
import App from "../pages/main/App";
import JobPage from "../pages/job/Job";
import Navabar from "../components/navbar/Navbar";
import RegisterPage from "../pages/auth/Register";
import LoginPage from "../pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navabar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/job",
        element: <JobPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
