import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./home";
import About from "./about";
import HomeContent from "./home-content";
import Contacts from "./contacts";
import Services from "./services";
import "./index.css";
const therouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-bg">
        <Home />
        <Outlet />
      </div>
    ),
    // outlook works in case of nested routes

    children: [
      {
        path: "",
        element: <HomeContent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={therouter} />
  </React.StrictMode>,
);
