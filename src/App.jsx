import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "./contexts/UserContext";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProfileReservationsPage from "./pages/ProfileReservationsPage";
import ProfileConfigPage from "./pages/ProfileConfigPage";
import AdminPage from "./pages/AdminPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AuthenticationModal from "./components/AuthenticationModal";
import UpdateNewUserModal from "./components/UpdateNewUserModal";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./utils/ScrollToTop";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  const { token, validateToken, userIsLoggedIn, userIsAdmin } =
    useUserContext();

  useEffect(() => {
    validateToken(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/servicos"} element={<ServicesPage />} />
          <Route path={"/sobre"} element={<AboutPage />} />
          <Route path={"/contato"} element={<ContactUsPage />} />
          {userIsLoggedIn && (
            <>
              <Route path={"/reservas"} element={<ProfileReservationsPage />} />
              <Route path={"/config"} element={<ProfileConfigPage />} />
            </>
          )}
          {userIsLoggedIn && userIsAdmin && (
            <Route path={"/admin"} element={<AdminPage />} />
          )}
          <Route
            path={"/reset-password/:hash"}
            element={<ResetPasswordPage />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <AuthenticationModal />
      <UpdateNewUserModal />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}
