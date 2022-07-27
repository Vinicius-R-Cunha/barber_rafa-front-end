import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./contexts/UserContext";
import DataContext from "./contexts/DataContext";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AuthenticationModal from "./components/AuthenticationModal";
import UpdateNewUserModal from "./components/UpdateNewUserModal";
import * as api from "./services/api";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";
import "./styles/reset.css";
import "./styles/style.css";
import axios from "axios";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loadingUserValidation, setLoadingUserValidation] = useState(true);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [userIsNewUser, setUserIsNewUser] = useState(false);
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [userData, setUserData] = useState();

  const url = window.location.href;

  useEffect(() => {
    validations();

    async function validations() {
      await validateToken(token);

      if (url.includes("?code=")) {
        await facebookLogin();
      }

      setLoadingUserValidation(false);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, url]);

  async function validateToken(token) {
    const user = await api.validateToken(token);
    if (user.status === 200) {
      setUserIsLoggedIn(true);
      setUserData(user.data);

      if (user.data.newUser) setUserIsNewUser(true);
      if (user.data.isAdmin) setUserIsAdmin(true);

      return;
    }

    localStorage.removeItem("token");
    setToken(null);
    setUserIsLoggedIn(false);

    return;
  }

  function openAuthenticationModal() {
    setAuthenticationIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  async function facebookLogin() {
    const userData = await getUserData();

    const response = await api.facebookOAuth({
      id: userData.id,
      name: userData.name,
      email: userData?.email || `facebook${userData.id}.email.com`,
      phone: "",
    });

    localStorage.setItem("token", response.data.token);
    setToken(response.data.token);
    return;
  }

  async function getUserData() {
    const code = url.split("?code=")[1].split("&")[0];
    const id = process.env.REACT_APP_FACEBOOK_APP_ID;
    const uri = process.env.REACT_APP_REDIRECT_URI;
    const secret = process.env.REACT_APP_CLIENT_SECRET;

    try {
      const response = await axios.get(
        `https://graph.facebook.com/v14.0/oauth/access_token?client_id=${id}&redirect_uri=${uri}&client_secret=${secret}&code=${code}`
      );

      const accessToken = response.data.access_token;

      const userData = await axios.get(
        `https://graph.facebook.com/me?fields=name,email,picture&access_token=${accessToken}`
      );

      return userData.data;
    } catch (error) {
      setLoadingUserValidation(false);
      return;
    }
  }

  return (
    <DataContext.Provider value={{ categoriesArray, setCategoriesArray }}>
      <UserContext.Provider
        value={{
          authenticationIsOpen,
          setAuthenticationIsOpen,
          openAuthenticationModal,
          token,
          setToken,
          loadingUserValidation,
          userIsLoggedIn,
          setUserIsLoggedIn,
          userIsAdmin,
          userIsNewUser,
          setUserIsNewUser,
          userData,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/servicos"} element={<ServicesPage />} />
            <Route path={"/sobre"} element={<AboutPage />} />
            <Route path={"/contato"} element={<ContactUsPage />} />
            {userIsLoggedIn && (
              <Route path={"/reservas"} element={<ProfilePage />} />
            )}
            {userIsLoggedIn && userIsAdmin && (
              <Route path={"/admin"} element={<AdminPage />} />
            )}
            <Route
              path={"/reset-password/:hash"}
              element={<ResetPasswordPage />}
            />
          </Routes>
        </BrowserRouter>
        <AuthenticationModal />
        <UpdateNewUserModal />
        <ToastContainer />
      </UserContext.Provider>
    </DataContext.Provider>
  );
}
