import { useContext, useEffect } from "react";
import AdminSection from "../../components/AdminSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import DataContext from "../../contexts/DataContext";
import * as api from "../../services/api";

export default function AdminPage() {
    const { categoriesArray, setCategoriesArray } = useContext(DataContext);

    useEffect(() => {
        renderPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function renderPage() {
        const categories = await api.getCategories();
        setCategoriesArray(categories);
    }

    if (categoriesArray.length === 0) {
        return <Loading />;
    }

    return (
        <>
            <AdminSection
                categoriesArray={categoriesArray}
                renderPage={renderPage}
            />
            <Footer />
        </>
    );
}
