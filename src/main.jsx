import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import AuthProvider from "./context/AuthContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <TaskProvider>
        <App/>
      </TaskProvider>
    </AuthProvider>
  </BrowserRouter>
);
