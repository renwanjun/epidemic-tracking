import React, { useMemo, useEffect, Component } from "react";
import { Skeleton } from "antd";
import { Switch, Route, Redirect, useHistory } from "react-router";
import { selectIsLogin, selectToken, getUser } from "@/reducers/login";
import { useAppSelector, useAppDispatch } from "@/hook";

interface RedirectConfig {
  redirect: boolean;
  from?: string;
  to: string;
}
interface Meta {
  requireAuth?: boolean;
}
interface RouteConfig {
  key?: string;
  path: string;
  exact?: boolean;
  component?: any;
  render?: any;
  routes: IRoute[];
  meta?: any;
}

type IRoute = RouteConfig | RedirectConfig;
type Props = Array<IRoute>;

// 高阶组件 可以添加路由守卫
const connect = function (route: RouteConfig) {
  return function (WrappedComponent: any) {
    return class extends React.Component {
      constructor(props: any) {
        super(props);
        this.state = {};
      }
      beforeEach = (to: RouteConfig, from: RouteConfig) => {
        // if (to?.meta?.requireAuth && !auth.isLoggedIn()) {
        // }
      };
      componentDidMount() {
        console.log("mount");
      }
      render() {
        const token = localStorage.getItem("token");
        // 执行守卫

        if (token) {
          return <WrappedComponent route={route} {...this.props} />;
        } else {
        }
        // debugger;
      }
    };
  };
};

// function useBeforeEach(config: any) {
//   console.log(config);
//   const history = useHistory();
//   // const meta=config?.meta
//   const { requireAuth } = config?.meta;
//   if (requireAuth && !isLogin) {
//     history.replace("/login");
//   }
// }
const hocConnect = (route: any) => {
  return function (WrappedComponent: any) {
    const HocComponent = ({ ...props }) => {
      const disaptch = useAppDispatch();
      const isLogin = useAppSelector((state: any) => selectIsLogin(state));
      const token = useAppSelector((state: any) => selectToken(state));
      const meta = route?.meta;
      const requireAuth = route.meta?.requireAuth;
      // console.log(requireAuth);
      // 需要认证且没有登录
      if (requireAuth && !isLogin) {
        // 没有token
        if (!token) {
          return <Redirect to="/login" />;
        } else {
          // 获取用户信息
          // setTimeout(function () {

          // }, 10000);
          disaptch(getUser());
          // .then((data: any) => {
          //   console.log(data);
          //   // return <div>hhs</div>;
          // })
          // .catch((err: any) => {
          //   console.log(err);
          //   // return <div>hhs</div>;
          // });
          return (
            // <div className="example">
            <Skeleton active />
            // </div>
          );
        }
      } else {
        return <WrappedComponent route={route} {...props} />;
      }
    };
    HocComponent.propTypes = {};
    return HocComponent;
  };
};

function RenderRoutes(props: any) {
  // console.log(props);
  const routes = props?.routes;
  const location = props?.location;
  // useEffect(() => {
  //   console.log(routes);
  //   return () => {
  //     // cleanup
  //   };
  // }, []);
  return (
    <Switch>
      {/* <RoutesComponent routes={routes} /> */}
      {routes?.map((route: any, index: number) =>
        !route?.redirect ? (
          <Route
            key={route.path?.toString()}
            path={`${route.path}`}
            exact={route?.exact}
            component={
              route.component ? hocConnect(route)(route?.component) : undefined
              // route.component ? route?.component : undefined
            }
            render={route?.render}
          />
        ) : (
          <Redirect key={"r" + index} from={route?.from} to={route?.to || ""} />
        )
      )}
    </Switch>
  );
}

function isEqual(prevProps: any, nextProps: any): boolean {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
  return Object.is(prevProps.routes, nextProps.routes);
}
// export default React.memo(RenderRoutes, isEqual);
export default React.memo(RenderRoutes);
