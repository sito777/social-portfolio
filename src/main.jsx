import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
