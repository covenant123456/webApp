import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [rider, setRider] = useState("");

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, rider, setRider }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
