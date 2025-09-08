import { useState } from 'react'
import Home from "./components/Home";
import Vault from "./components/Vault";
import ExploreVault from "./components/ExploreVault";
//import AuthLayout from "./components/AuthLayout";
//import Login from "./components/Login";
//import Register from "./components/Register";
import './App.css';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/vault"> Vault </Link>
        <Link to="/explorevault"> Explore Vault </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;