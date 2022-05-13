import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import AdminPage from "./pages/AdminPage";
import AuthenticationModal from "./components/AuthenticationModal";
import "./styles/reset.css";
import "./styles/style.css";

export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);

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
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/servicos"} element={<ServicesPage />} />
                    <Route path={"/sobre"} element={<AboutPage />} />
                    <Route path={"/contato"} element={<ContactUsPage />} />
                    <Route path={"/admin"} element={<AdminPage />} />
                </Routes>
            </BrowserRouter>
            <AuthenticationModal />
        </UserContext.Provider>
    );
}
