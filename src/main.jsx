import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { LoginProvider } from "./AuthContext/loginContext.jsx";
import { AppKitProvider } from "./pages/Home/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppKitProvider>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </AppKitProvider>
  </StrictMode>
);
