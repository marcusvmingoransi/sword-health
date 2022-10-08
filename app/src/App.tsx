import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { AuthProvider, useAuth } from "./context/auth-context";
import { Role } from "./models/models";

const Login = React.lazy(() => import("./pages/login"));
const Home = React.lazy(() => import("./pages/home"));
const Bookmark = React.lazy(() => import("./pages/bookmark"));
const ArticleSubmission = React.lazy(
  () => import("./pages/article-submission")
);
const AccessDenied = React.lazy(() => import("./pages/access-denied"));

const Loading = () => <p>Loading ...</p>;

const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute permissions={[Role.Administrator, Role.User]}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/bookmark"
              element={
                <PrivateRoute permissions={[Role.Administrator, Role.User]}>
                  <Bookmark />
                </PrivateRoute>
              }
            />
            <Route
              path="/article-submission"
              element={
                <PrivateRoute
                  redirectPath="/home"
                  permissions={[Role.Administrator]}
                >
                  <ArticleSubmission />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<AccessDenied />} />
          </Routes>
        </AuthProvider>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
