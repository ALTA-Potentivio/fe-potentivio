import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/roboto";
import Route from "./routes/Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);

