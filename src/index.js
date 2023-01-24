import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/landing/Landing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Work from "./pages/Work";
import Test from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "work",
    element: <Work />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
