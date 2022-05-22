import HeaderSection from "../../components/HeaderSection";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import { useContext, useEffect } from "react";
import * as api from "../../services/api";
import DataContext from "../../contexts/DataContext";
import { toast } from "react-toastify";

export default function ServicesPage() {
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
        return (
            <>
                <HeaderSection page={"services"} title="Serviços" />
                <Loading />
                <Footer />
            </>
        );
    }

    return (
        <>
            <HeaderSection page={"services"} title="Serviços" />
            <ServicesSection categoriesArray={categoriesArray} />
            <Footer />
        </>
    );
}
