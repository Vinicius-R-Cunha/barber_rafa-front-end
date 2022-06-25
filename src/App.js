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
import AuthenticationModal from "./components/AuthenticationModal";
import * as api from "./services/api";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";
import "./styles/reset.css";
import "./styles/style.css";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [userData, setUserData] = useState();

  useEffect(() => {
    validateToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  async function validateToken(token) {
    const user = await api.validateToken(token);
    if (user.status === 200) {
      setUserIsLoggedIn(true);
      setUserData(user.data);

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

  return (
    <DataContext.Provider value={{ categoriesArray, setCategoriesArray }}>
      <UserContext.Provider
        value={{
          authenticationIsOpen,
          setAuthenticationIsOpen,
          openAuthenticationModal,
          token,
          setToken,
          userIsLoggedIn,
          setUserIsLoggedIn,
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
          </Routes>
        </BrowserRouter>
        <AuthenticationModal />
        <ToastContainer />
      </UserContext.Provider>
    </DataContext.Provider>
  );
}
