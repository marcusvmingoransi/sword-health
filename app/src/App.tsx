import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/home" element={<Home />} />
            <Route path="article-submission" element={<ArticleSubmission />} />
            <Route path="*" element={<AccessDenied />} />
          </Routes>
        </AuthProvider>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
