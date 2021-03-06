import { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/DataContext";
import * as api from "../../services/api";
import { toast } from "react-toastify";
import HeaderSection from "../../components/HeaderSection";
import AdminSection from "../../components/AdminSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import CategoryModal from "../../components/CategoryModal";
import ServiceModal from "../../components/ServiceModal";
import BusinessHoursModal from "../../components/BusinessHoursModal";

export default function AdminPage() {
  const { categoriesArray, setCategoriesArray } = useContext(DataContext);

  const [serviceData, setServiceData] = useState();

  const [categoryData, setCategoryData] = useState();
  const [categoryModalType, setCategoryModalType] = useState("");
  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

  const [serviceModalType, setServiceModalType] = useState("");
  const [serviceModalIsOpen, setServiceModalIsOpen] = useState(false);

  const [businessHoursModalIsOpen, setBusinessHoursModalIsOpen] =
    useState(false);
  const [schedulesArray, setSchedulesArray] = useState();

  useEffect(() => {
    renderPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderPage() {
    getCategories();
    getSchedules();

    return;
  }

  async function getCategories() {
    const response = await api.getCategories();
    if (response.status === 200) {
      return setCategoriesArray(response.data);
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

  async function getSchedules() {
    const response = await api.getSchedules();
    if (response.status === 200) {
      return setSchedulesArray(response.data);
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

  if (
    categoriesArray?.length === 0 ||
    !categoriesArray ||
    schedulesArray?.length === 0 ||
    !schedulesArray
  ) {
    return <Loading />;
  }

  return (
    <>
      <HeaderSection page="admin" title="Administração" />
      <AdminSection
        categoriesArray={categoriesArray}
        setServiceData={setServiceData}
        setCategoryData={setCategoryData}
        setCategoryModalType={setCategoryModalType}
        setCategoryModalIsOpen={setCategoryModalIsOpen}
        setServiceModalType={setServiceModalType}
        setServiceModalIsOpen={setServiceModalIsOpen}
        setBusinessHoursModalIsOpen={setBusinessHoursModalIsOpen}
      />

      <BusinessHoursModal
        businessHoursModalIsOpen={businessHoursModalIsOpen}
        setBusinessHoursModalIsOpen={setBusinessHoursModalIsOpen}
        schedulesArray={schedulesArray}
        renderPage={renderPage}
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
