import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../utils/redux/store/store";
import { Provider } from "react-redux";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import RegisterOwner from "../pages/owner/register"
import RegisterArtist from "../pages/artist/register"

function Index() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-artist" element={<RegisterArtist />} />
          <Route path="/register-owner" element={<RegisterOwner />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Index;
