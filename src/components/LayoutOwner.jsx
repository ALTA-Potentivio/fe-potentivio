import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderOwner from "./HeaderOwner";

const LayoutOwner = () => {
  return (
    <div>
      <HeaderOwner />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutOwner;