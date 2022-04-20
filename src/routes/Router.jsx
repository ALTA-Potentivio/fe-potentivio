import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../pages/App";

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default Index;
