import React from "react";
import ReactDOM from "react-dom/client";
import {
  Link,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./navbar";
import "./index.css";
function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}
export default Home;
