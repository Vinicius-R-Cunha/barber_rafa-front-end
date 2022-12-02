import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export function UserContextProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loadingUserValidation, setLoadingUserValidation] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [userIsNewUser, setUserIsNewUser] = useState(false);
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);
  const [userData, setUserData] = useState();

  function openAuthenticationModal() {
    setAuthenticationIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  return (
    <UserContext.Provider
      value={{
        authenticationIsOpen,
        setAuthenticationIsOpen,
        openAuthenticationModal,
        token,
        setToken,
        loadingUserValidation,
        setLoadingUserValidation,
        userIsLoggedIn,
        setUserIsLoggedIn,
        userIsAdmin,
        setUserIsAdmin,
        userIsNewUser,
        setUserIsNewUser,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
