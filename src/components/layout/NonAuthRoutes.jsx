import { useAuth } from "providers";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "utils";
import { Fragment } from "react";

export const NonAuthRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === undefined) return <Fragment />;

  if (!isLoggedIn) return <Outlet />;

  return <Navigate to={ROUTE.INDEX} />;
};
