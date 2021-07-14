import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authPage, setAuthPage] = useState(false);

  const slideClose = () => {
    console.log("roshan", false);
    setAuthPage(false);
  };
  const slideOpen = () => {
    console.log("roshan", true);
    setAuthPage(true);
  };
  return (
    <AuthContext.Provider value={{ authPage, slideOpen, slideClose }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
