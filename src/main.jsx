import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ExploreVault from "./pages/ExploreVault";
import NavBar from "./components/ux/ui/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <TaskProvider>
      <NavBar path="/" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="vault" element={<Vault />} />
        <Route path="explorevault" element={<ExploreVault />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskProvider>
  </BrowserRouter>
);
