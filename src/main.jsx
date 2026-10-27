import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { IncidentProvider } from "./context/IncidentContext";
import "./index.css";

// Provider wraps the app so every page can read the shared data
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <IncidentProvider>
      <App />
    </IncidentProvider>
  </BrowserRouter>
);
