import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../utils/redux/store/store";
import { Provider } from "react-redux";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register_Owner from "../pages/owner/register"
import Register_Artist from "../pages/artist/register"

function Index() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-artist" element={<Register_Artist />} />
          <Route path="/register-owner" element={<Register_Owner />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Index;
