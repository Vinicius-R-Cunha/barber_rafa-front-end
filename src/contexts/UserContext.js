import { useState, createContext, useContext } from "react";
import * as api from "../services/api";

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

  async function validateToken(token) {
    const user = await api.validateToken(token);
    if (user.status === 200) {
      setUserIsLoggedIn(true);
      setUserData(user.data);

      if (user.data.newUser) setUserIsNewUser(true);
      if (user.data.isAdmin) setUserIsAdmin(true);

      setLoadingUserValidation(false);
      return;
    }

    localStorage.removeItem("token");
    setToken(null);
    setUserIsLoggedIn(false);
    setLoadingUserValidation(false);

    return;
  }

  return (
    <UserContext.Provider
      value={{
        authenticationIsOpen,
        setAuthenticationIsOpen,
        openAuthenticationModal,
        validateToken,
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
