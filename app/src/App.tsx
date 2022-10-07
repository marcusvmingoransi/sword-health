import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { AuthProvider } from "./context/auth-context";

const Login = React.lazy(() => import("./pages/login"));
const Home = React.lazy(() => import("./pages/home"));
const ArticleSubmission = React.lazy(
  () => import("./pages/article-submission")
);
const AccessDenied = React.lazy(() => import("./pages/access-denied"));

const Loading = () => <p>Loading ...</p>;

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="article-submission"
              element={
                <PrivateRoute>
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
