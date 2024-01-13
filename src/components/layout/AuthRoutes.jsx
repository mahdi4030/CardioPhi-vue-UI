import { useAuth } from "providers";
import { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "utils";

export const AuthRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === undefined) return <Fragment />;

  if (isLoggedIn) return <Outlet />;

  return <Navigate to={ROUTE.AUTH_SIGN_IN} />;
};
