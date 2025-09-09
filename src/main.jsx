import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Vault from "./components/Vault";
import ExploreVault from "./components/ExploreVault";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import App from "./App"


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="vault" element={<Vault />} />
      <Route path="explorevault" element={<ExploreVault />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
