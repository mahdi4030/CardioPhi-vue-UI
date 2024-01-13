import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./providers";
import { AuthRoutes, NonAuthRoutes } from "components";
import { SignIn, SignUp, ECGAnalysis } from "./pages";
import { ROUTE } from "utils";
import "assets/scss/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path={ROUTE.INDEX} element={<AuthRoutes />}>
              <Route
                index
                element={<Navigate to={ROUTE.ECG_ANALYSIS} replace />}
              />
              <Route path={ROUTE.ECG_ANALYSIS} element={<ECGAnalysis />} />
            </Route>

            <Route path={ROUTE.INDEX} element={<NonAuthRoutes />}>
              <Route
                index
                element={<Navigate to={ROUTE.AUTH_SIGN_IN} replace />}
              />
              <Route default path={ROUTE.AUTH_SIGN_IN} element={<SignIn />} />
              <Route default path={ROUTE.AUTH_SIGN_UP} element={<SignUp />} />
            </Route>

            <Route path="*" element={<Navigate to={ROUTE.INDEX} replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
