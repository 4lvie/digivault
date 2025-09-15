import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ExploreVault from "./pages/ExploreVault";
import Layout from "./components/ux/ui/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <TaskProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="vault" element={<Vault />} />
          <Route path="explorevault" element={<ExploreVault />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TaskProvider>
  </BrowserRouter>
);
