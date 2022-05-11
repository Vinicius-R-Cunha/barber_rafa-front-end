import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AdminPage from "./pages/AdminPage";
import "./styles/reset.css";
import "./styles/style.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/services"} element={<ServicesPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
}
