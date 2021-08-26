import React from "react";
import "./App.less";
import {
  renderRoutes,
  RouteConfig,
  RouteConfigComponentProps,
} from "react-router-config";
import AdminLayout from "./components/layout";
import { Route, Switch, Redirect } from "react-router-dom";

import { TestContext } from "./contexts";
function App(props: RouteConfigComponentProps) {
  let { route } = props;
  let path = route?.path;
  let routes = route?.routes;

  return (
    <div className="App">
      <TestContext.Provider value={props}>
        <AdminLayout>
          <Switch>
            {routes?.map((route: RouteConfig, index) => (
              <Route
                key={route.path?.toString()}
                path={`${path}${route.path}`}
                exact={route.exact}
                component={route.component}
              />
              // <Route
              //   key={route.path?.toString()}
              //   path={`${route.path}`}
              //   exact={route.exact}
              //   component={route.component}
              // />
            ))}
          </Switch>
        </AdminLayout>
      </TestContext.Provider>
    </div>
  );
}

export default App;
