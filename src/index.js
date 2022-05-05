import React from 'react';
import ReactDOM from 'react-dom/client';
import "mapbox-gl/dist/mapbox-gl.css";
import "@fontsource/roboto";
import "react-calendar/dist/Calendar.css";
import Route from "./routes/Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);

