import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderArtist from "./HeaderArtist"

const LayoutArtist = () => {
  return (
    <div>
      <HeaderArtist />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutArtist;
