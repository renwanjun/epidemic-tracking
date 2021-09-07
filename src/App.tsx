import React, { memo } from "react";
import "./App.less";
// import { RouteConfig, RouteConfigComponentProps } from "react-router-config";
import AdminLayout from "components/layout";
// import { Route, Switch, Redirect } from "react-router-dom";
import RenderRoutes from "@/utils/render-routes";
function App(props: any) {
  let { route } = props;
  // console.log(route);
  let routes = route?.routes;
  return (
    <AdminLayout {...props}>
      <RenderRoutes routes={routes} {...props} />
      {/* {RenderRoutes(routes)} */}
      {/* <Switch>
        {routes?.map((route: RouteConfig) => (
          <Route
            key={route.path?.toString()}
            path={`${route.path}`}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Redirect from="/home" to="/home/overall/national-trend" />
      </Switch> */}
    </AdminLayout>
  );
}

export default memo(App);
