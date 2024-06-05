import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorPage } from "./routes/ErrorPage";
import { AboutRoute } from "./routes/About";
import { HomePage } from "./routes/Home";
import { TasksRoute } from "./routes/TaskRoute";
import { PlanedTasks } from "./routes/PlanedTasks";
import { ProgressTasks } from "./routes/ProgressTasks";
import { DoneTasks } from "./routes/DoneTask";

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
        path: "/plan",
        element: <PlanedTasks />,
      },
      {
        path: "/progress",
        element: <ProgressTasks />,
      },
      {
        path: "/done",
        element: <DoneTasks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
