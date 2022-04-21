import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../pages/App";
import Welcome from "../pages/Welcome";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
