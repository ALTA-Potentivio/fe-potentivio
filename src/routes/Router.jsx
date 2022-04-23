import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../utils/redux/store/store";
import { Provider } from "react-redux";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import RegisterOwner from "../pages/owner/Register";
import RegisterArtist from "../pages/artist/Register";

import HomeOwner from "../pages/owner/Home";
import DetailOwner from "../pages/owner/Detail";
import HireStatus from "../pages/owner/HireStatus";
import Notification from "../pages/owner/Notification";
import ProfileOwner from "../pages/owner/Profile";

import HomeArtist from "../pages/artist/Home";
import DetailArtist from "../pages/artist/Detail";
import InboxArtist from "../pages/artist/Inbox";
import ProfileArtist from "../pages/artist/Profile";

function Index() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-artist" element={<RegisterArtist />} />
          <Route path="/register-owner" element={<RegisterOwner />} />
          <Route path="/home-owner" element={<HomeOwner />} />
          <Route path="/detail-owner" element={<DetailOwner />} />
          <Route path="/hire-owner" element={<HireStatus />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile-owner" element={<ProfileOwner />} />
          <Route path="/home-artist" element={<HomeArtist />} />
          <Route path="/detail-artist" element={<DetailArtist />} />
          <Route path="/inbox-artist" element={<InboxArtist />} />
          <Route path="/profile-artist" element={<ProfileArtist />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Index;
