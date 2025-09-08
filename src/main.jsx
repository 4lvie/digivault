import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Vault from "./components/Vault";
import ExploreVault from "./components/ExploreVault";
import Login from "./pages/Login";
import App from "./App"


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="vault" element={<Vault />} />
        <Route path="explorevault" element={<ExploreVault />} />
        <Route path="login" element={<Login />} />
        {/* 
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
         */}
      </Route>
    </Routes>
  </BrowserRouter>,
);
