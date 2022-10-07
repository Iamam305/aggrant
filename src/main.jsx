import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Home from "./pages/Home";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
