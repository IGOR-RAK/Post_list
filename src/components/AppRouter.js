import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { PrivateRoutes, PublicRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "../UI/loader/Loader";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="main_container">
      {isAuth ? (
        <Switch>
          {PrivateRoutes.map((route) => (
            <Route
              key={route.path}
              component={route.component}
              exact={route.exact}
              path={route.path}
            />
          ))}
          <Redirect to="/posts" />
        </Switch>
      ) : (
        <Switch>
          {PublicRoutes.map((route) => (
            <Route
              key={route.path}
              component={route.component}
              exact={route.exact}
              path={route.path}
            />
          ))}
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
}
