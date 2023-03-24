import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes,privateRoutes } from "../router";
import Loader from "./UI/Loader/Loader";


export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth)

  if(isLoading){
    return <Loader/>
  }
  return (
    isAuth
        ?
        <Switch>
            {privateRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/posts'/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/login'/>
        </Switch>
);
}