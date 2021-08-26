import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./router"; // 路由

// 全局Context
// const ThemeContext = React.createContext("light");

ReactDOM.render(
  <Router>{renderRoutes(routes)}</Router>,
  document.getElementById("root")
);

// const Root = ({ route }: RouteConfigComponentProps) => (
//   <div>
//     <h1>Root</h1>
//     {/* child routes won't render without this */}
//     {route && renderRoutes(route.routes)}
//   </div>
// );

// const Home = ({ route }: RouteConfig) => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const Child = ({ route }: RouteConfig) => (
//   <div>
//     <h2>Child</h2>
//     {/* child routes won't render without this */}
//     {renderRoutes(route.routes)}
//   </div>
// );

// const GrandChild = () => (
//   <div>
//     <h3>Grand Child</h3>
//   </div>
// );

// const routes: RouteConfig[] = [
//   {
//     component: Root,
//     routes: [
//       { path: "/", exact: true, component: Home },
//       {
//         path: "/child/:id",
//         component: Child,
//         // routes: [
//         //   path: '/child/:id/grand-child',
//         //   component: GrandChild
//         // ]
//       },
//     ],
//   },
// ];
// ReactDOM.render(
//   <Router>
//     {/* kick it all off with the root route */}
//     {renderRoutes(routes)}
//   </Router>,
//   document.getElementById("root")
// );
