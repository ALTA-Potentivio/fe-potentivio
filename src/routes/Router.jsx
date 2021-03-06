import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../utils/redux/store/store";
import { Provider } from "react-redux";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import RegisterArtist from "../pages/artist/RegisterArtist";
import RegisterOwner from "../pages/owner/RegisterOwner";

import CompleteOwner from "../pages/owner/CompleteOwner";
import HomeOwner from "../pages/owner/Home";
import DetailOwner from "../pages/owner/Detail";
import HireStatus from "../pages/owner/HireStatus";
import Notification from "../pages/owner/Notification";
import ProfileOwner from "../pages/owner/Profile";
import Rating from "../pages/owner/Rating";

import CompleteArtist from "../pages/artist/CompleteArtist";
import HomeArtist from "../pages/artist/Home";
import DetailArtist from "../pages/artist/Detail";
import InboxArtist from "../pages/artist/Inbox";
import ProfileArtist from "../pages/artist/Profile";

import LayoutOwner from "../components/LayoutOwner";
import LayoutArtist from "../components/LayoutArtist";

function Index() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-artist" element={<RegisterArtist />} />
          <Route path="/register-owner" element={<RegisterOwner />} />
          <Route path="/complete-owner" element={<CompleteOwner />} />
          <Route path="/owner" element={<LayoutOwner />}>
            <Route index element={<HomeOwner />} />
            <Route path="detail-owner/:id" element={<DetailOwner />} />
            <Route path="hire-owner" element={<HireStatus />} />
            <Route path="notification" element={<Notification />} />
            <Route path="profile-owner" element={<ProfileOwner />} />
            <Route path="rating/:id" element={<Rating />} />
          </Route>
          <Route path="/complete-artist" element={<CompleteArtist />} />
          <Route path="/artist" element={<LayoutArtist />}>
            <Route index element={<HomeArtist />} />
            <Route path="detail-artist/:id" element={<DetailArtist />} />
            <Route path="inbox-artist" element={<InboxArtist />} />
            <Route path="profile-artist" element={<ProfileArtist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Index;
