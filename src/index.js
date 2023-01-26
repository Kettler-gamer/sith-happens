import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App category="" />}></Route>
        <Route path="/people" element={<App category="people" />}></Route>
        <Route path="/starships" element={<App category="starships" />}></Route>
        <Route path="/vehicles" element={<App category="vehicles" />}></Route>
        <Route path="/films" element={<App category="films" />}></Route>
        <Route path="/planets" element={<App category="planets" />}></Route>
        <Route path="/species" element={<App category="species" />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
