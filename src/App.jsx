import { createBrowserRouter, RouterProvider } from "react-router";
// import MainLayout from "./layouts/MainLayout";
// import Dashboard from "./pages/Dashboard";
// import Sensors from "./pages/Sensors";
// import SensorDetail from "./pages/SensorDetail";
// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    children: [
      { index: true, element: "" },
      { path: "sensors", element: ""},
      { path: "sensors/:id", element: "" },
      { path: "*", element: "" },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}