import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorPage } from "./routes/ErrorPage";
import { AboutRoute } from "./routes/About";

import { HomePage } from "./routes/Home";

import { TasksRoute } from "./routes/TaskRoute";
import { AddTask } from "./components/AddTask";

const router = createBrowserRouter([
  {
    path: "/", /// main root
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // landing page root
        element: <HomePage />,
      },
      {
        path: "/about", //
        element: <AboutRoute />,
      },
      {
        path: "/tasks",
        element: <TasksRoute />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
