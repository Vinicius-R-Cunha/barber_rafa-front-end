import { useState, useContext, createContext, useCallback } from "react";

const AuthModalContext = createContext();

export function AuthModalContextProvider(props) {
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);

  const openAuthenticationModal = useCallback(() => {
    setAuthenticationIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <AuthModalContext.Provider
      value={{
        authenticationIsOpen,
        setAuthenticationIsOpen,
        openAuthenticationModal,
      }}
    >
      {props.children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModalContext() {
  return useContext(AuthModalContext);
}
