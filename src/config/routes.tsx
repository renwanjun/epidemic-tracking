import React from "react";
import { Redirect } from "react-router-dom";
// import { RouteConfig } from "react-router-config";
import App from "@/App";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import NationalTrend from "@/pages/NationalTrend";

// const ProvinceEpidemic = React.lazy(() => import("../pages/ProvinceEpidemic"));
import ProvinceEpidemic from "@/pages/ProvinceEpidemic";
import RomoursContent from "@/pages/RumoursContent";

const routes: any[] = [
  {
    path: "/home",
    component: App,
    meta: {
      requireAuth: true,
    },
    routes: [
      {
        path: "/home/overall/national-trend",
        exact: true,
        component: NationalTrend,
        // render: () => <div>dddd</div>,
      },
      {
        path: "/home/overall/province-epidemic",
        exact: true,
        component: ProvinceEpidemic,
        // render: () => <div>dddd</div>,
      },
      {
        path: "/home/notices/notices-content",
        exact: true,
        // component: ProvinceEpidemic,
        render: () => <div>dddd</div>,
      },
      {
        path: "/home/deny-rumours/rumours-content",
        exact: true,
        component: RomoursContent,
        // render: () => <div>dddd</div>,
      },
      {
        // path: "/home",
        exact: true,
        redirect: true,
        from: "/home",
        to: "/home/overall/national-trend",
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
  // {
  //   path: "/home",
  //   exact: true,
  //   render: () => <Redirect to="/home/overall/national-trend" />,
  // },
  {
    path: "*",
    // exact: true,
    component: NotFound,
  },
];

export default routes;
