import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./utils/ScrollToTop";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/servicos"} element={<ServicesPage />} />
          <Route path={"/sobre"} element={<AboutPage />} />
          <Route path={"/contato"} element={<ContactUsPage />} />
          <Route path={"/reservas"} element={<ProfileReservationsPage />} />
          <Route path={"/config"} element={<ProfileConfigPage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route
            path={"/reset-password/:hash"}
            element={<ResetPasswordPage />}
          />
          <Route path={"/404"} element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
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
