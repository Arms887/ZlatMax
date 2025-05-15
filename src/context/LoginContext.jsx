import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const closeLogin = () => setIsLoginOpen(false);

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <LoginContext.Provider
      value={{
        isLoginOpen,
        openLogin,
        closeLogin,
        isRegisterOpen,
        openRegister,
        closeRegister,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
