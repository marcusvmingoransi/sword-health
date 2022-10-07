import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import ArticleSubmission from "./pages/article-submission";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article-submission" element={<ArticleSubmission />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
