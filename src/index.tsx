import React from "react";
import ReactDOM from "react-dom";
import "./index.less";

// 路由相关
import { BrowserRouter as Router } from "react-router-dom";
// import { renderRoutes } from "react-router-config";
import RenderRoutes from "@/utils/render-routes";
import routes from "./config/routes"; // 路由

// router相关
import { Provider } from "react-redux";
import store from "./store";

// 重点 路由守卫

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RenderRoutes routes={routes} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
