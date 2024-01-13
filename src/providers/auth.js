import React, { createContext, useContext, useEffect, useState } from "react";
import {
  cognitoUserSignIn,
  cognitoUserSignOut,
  cognitoUserSignUp,
  getCurrentUser,
} from "utils/cognito";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "utils";

const AuthContext = createContext([
  {
    isLoading: false,
    isLoggedIn: false,
    currentUser: null,
  },
  () => null,
]);

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const isLoggedIn = !!currentUser;

  const signUp = async ({ firstName, lastName, email, password }) => {
    setLoading(true);

    try {
      await cognitoUserSignUp({ firstName, lastName, email, password });
      toast.success("Sign up is completed...");
      navigate(ROUTE.AUTH_SIGN_IN);
    } catch (error) {
      toast.error(error.message || JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  const signIn = async ({ email, password }) => {
    setLoading(true);

    try {
      await cognitoUserSignIn(email, password);
      const currentUser = await getCurrentUser();
      setCurrentUser(currentUser);

      navigate(ROUTE.HOME);
    } catch (error) {
      toast.error(error.message || JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    cognitoUserSignOut();
    setCurrentUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        currentUser,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
