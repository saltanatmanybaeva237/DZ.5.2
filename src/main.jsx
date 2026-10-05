import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users, { usersLoader } from "./Users";
import User, { userLoader } from "./User";
import ErrorPage from "./Error";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
    loader: usersLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:id",
    element: <User />,
    loader: userLoader,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

