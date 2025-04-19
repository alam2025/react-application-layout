import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import OLTList from "../pages/Olt";
import Login from "../pages/auth/Login";
import PrivateRoute from "../provider/PrivateRoute";
import MicrotrickList from "../pages/Microtricklist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "olt-list",
        element: <OLTList />,
      },
      {
        path: "microtrick-list",
        element: <MicrotrickList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
