import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { LoginProvider } from "./AuthContext/loginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  </StrictMode>
);
