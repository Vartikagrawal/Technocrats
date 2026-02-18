import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Resource from "./Pages/Resource/Resource";
import Event from "./Pages/EventPage/Event";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutpage from "./Pages/About/Aboutpage";
import Course from "./Pages/Courses/Course";
import Hackers from "./Pages/Hackers/Hackers";
import Videos from "./Pages/Videos/Videos";
import Player from "./Pages/player/Player";
import Register from "./Pages/Registration/Register";
import Achievement from "./Pages/Achievment/Achievment"



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/achievement",
        element: <Achievement />,
      },
      {
        path: "/hackers/:name",
        element: <Hackers />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/contact",
        element: <contact />,
      },
      {
        path: "/resource",
        element: <Resource />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/video",
        element: <Player />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
