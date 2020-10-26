import React from "react";
import PropTypes from "prop-types";
import CardConnect from "./components/CardConnect/CardConnect";
import WaitRoom from "./components/WaitRoom/WaitRoom";
import { Route, Switch } from "react-router-dom";

const ROUTES = [
  {
    path: "/",
    key: "APP",
    component: (props) => {
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: CardConnect,
      },
      {
        path: "/waitRoom",
        key: "APP_WAIT_ROOM",
        exact: true,
        component: WaitRoom,
      },
    ],
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 */
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

/**
 * Use this component for any new section of routes (any config object that has a "routes" property)
 */
export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Queiroz não está aqui.</h1>} />
    </Switch>
  );
};

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
};
