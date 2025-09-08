import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Vault from "./components/Vault";
import ExploreVault from "./components/ExploreVault";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/login"> Login </Link>
        <Link to="/home"> Home </Link>
        <Link to="/vault"> Vault </Link>
        <Link to="/explorevault"> Explore Vault </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;