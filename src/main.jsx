import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import ExploreVault from "./pages/ExploreVault";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Layout from "./components/ux/Layout";

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
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TaskProvider>
  </BrowserRouter>
);
