import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExploreVault from "./pages/ExploreVault";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Layout from "./components/ui/Layout";
import UserGranted from "./components/utils/UserGranted";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="explorevault"
          element={
            <UserGranted>
              <ExploreVault />
            </UserGranted>
          }
        />
        <Route
          path="profile"
          element={
            <UserGranted>
              <Profile />
            </UserGranted>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
