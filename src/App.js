import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SchedulesPage from "./pages/SchedulesPage";
import AdminPage from "./pages/AdminPage";
import "./styles/reset.css";
import "./styles/style.css";
import ContactUsPage from "./pages/ContactUsPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/horarios"} element={<SchedulesPage />} />
                <Route path={"/servicos"} element={<ServicesPage />} />
                <Route path={"/contato"} element={<ContactUsPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
}
