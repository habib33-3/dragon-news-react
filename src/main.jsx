import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);