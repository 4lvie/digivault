import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <TaskProvider>
      <App/>
    </TaskProvider>
  </BrowserRouter>
);
