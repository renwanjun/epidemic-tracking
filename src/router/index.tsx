import React from "react";
import { Redirect } from "react-router-dom";
import { RouteConfig } from "react-router-config";
import App from "../App";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import NationalTrend from "../pages/NationalTrend";

// const ProvinceEpidemic = React.lazy(() => import("../pages/ProvinceEpidemic"));
import ProvinceEpidemic from "../pages/ProvinceEpidemic";
const routes: RouteConfig[] = [
  {
    path: "/home",
    // exact: true,
    component: App,
    routes: [
      {
        path: "/overall/national-trend",
        exact: true,
        component: NationalTrend,
        // render: () => <div>dddd</div>,
      },
      {
        path: "/overall/province-epidemic",
        exact: true,
        component: ProvinceEpidemic,
        // render: () => <div>dddd</div>,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "*",
    // exact: true,
    component: NotFound,
  },
];

export default routes;
