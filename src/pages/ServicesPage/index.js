import HeaderSection from "../../components/HeaderSection";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import * as api from "../../services/api";

export default function ServicesPage() {
    const [categoriesArray, setCategoriesArray] = useState([]);

    useEffect(() => {
        renderPage();
    });

    async function renderPage() {
        const categories = await api.getCategories();
        setCategoriesArray(categories);
    }

    if (categoriesArray.length === 0) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <HeaderSection page={"services"} title="Serviços" />
            <ServicesSection categoriesArray={categoriesArray} />
            <Footer />
        </>
    );
}
