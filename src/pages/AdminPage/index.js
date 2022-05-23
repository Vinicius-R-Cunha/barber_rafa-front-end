import { useContext, useEffect } from "react";
import AdminSection from "../../components/AdminSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import DataContext from "../../contexts/DataContext";
import * as api from "../../services/api";
import { toast } from "react-toastify";

export default function AdminPage() {
    const { categoriesArray, setCategoriesArray } = useContext(DataContext);

    useEffect(() => {
        renderPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function renderPage() {
        const promise = await api.getCategories();
        if (promise.status === 200) {
            setCategoriesArray(promise.data);
            return;
        }
        return toast.error(
            "Erro ao carregar serviços, por favor recarregue a página",
            {
                position: "bottom-left",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    }

    if (categoriesArray?.length === 0 || !categoriesArray) {
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
