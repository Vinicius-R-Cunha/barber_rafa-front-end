import { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/DataContext";
import * as api from "../../services/api";
import { toast } from "react-toastify";
import AdminSection from "../../components/AdminSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import CategoryModal from "../../components/CategoryModal";
import ServiceModal from "../../components/ServiceModal";

export default function AdminPage() {
  const { categoriesArray, setCategoriesArray } = useContext(DataContext);

  const [serviceData, setServiceData] = useState();

  const [categoryData, setCategoryData] = useState();
  const [categoryModalType, setCategoryModalType] = useState("");
  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

  const [serviceModalType, setServiceModalType] = useState("");
  const [serviceModalIsOpen, setServiceModalIsOpen] = useState(false);

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
        setServiceData={setServiceData}
        setCategoryData={setCategoryData}
        setCategoryModalType={setCategoryModalType}
        setCategoryModalIsOpen={setCategoryModalIsOpen}
        setServiceModalType={setServiceModalType}
        setServiceModalIsOpen={setServiceModalIsOpen}
      />

      <CategoryModal
        categoryModalIsOpen={categoryModalIsOpen}
        setCategoryModalIsOpen={setCategoryModalIsOpen}
        categoryData={categoryData}
        type={categoryModalType}
        renderPage={renderPage}
      />

      <ServiceModal
        serviceModalIsOpen={serviceModalIsOpen}
        setServiceModalIsOpen={setServiceModalIsOpen}
        categoryData={categoryData}
        serviceData={serviceData}
        type={serviceModalType}
        renderPage={renderPage}
      />

      <Footer />
    </>
  );
}
