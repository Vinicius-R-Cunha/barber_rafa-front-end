import { useContext, useEffect, useState } from "react";
import * as api from "../../services/api";
import DataContext from "../../contexts/DataContext";
import { toast } from "react-toastify";
import UserContext from "../../contexts/UserContext";
import HeaderSection from "../../components/HeaderSection";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import ReadMoreModal from "../../components/ReadMoreModal";
import ReservationModal from "../../components/ReservationModal";

export default function ServicesPage() {
  const { categoriesArray, setCategoriesArray } = useContext(DataContext);
  const { token, setAuthenticationIsOpen } = useContext(UserContext);

  const [readMoreModalIsOpen, setReadMoreModalIsOpen] = useState(false);
  const [serviceData, setServiceData] = useState();
  const [wantedReservations, setWantedReservations] = useState([]);
  const [reservationModalIsOpen, setReservationModalIsOpen] = useState(false);
  const [isChoosingMoreServices, setIsChoosingMoreServices] = useState(false);

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

  function readMore(service) {
    setReadMoreModalIsOpen(true);
    setServiceData(service);
    document.body.style.overflow = "hidden";
  }

  function handleReservation(service) {
    setWantedReservations([...wantedReservations, service]);
    setServiceData(service); //TEMP
    if (!token) {
      setAuthenticationIsOpen(true);
      document.body.style.overflow = "hidden";
      return;
    }
    setReservationModalIsOpen(true);
    document.body.style.overflow = "hidden";
    return;
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
      <ServicesSection
        readMore={readMore}
        handleReservation={handleReservation}
        isChoosingMoreServices={isChoosingMoreServices}
      />
      <ReadMoreModal
        readMoreModalIsOpen={readMoreModalIsOpen}
        setReadMoreModalIsOpen={setReadMoreModalIsOpen}
        serviceData={serviceData}
        setReservationModalIsOpen={setReservationModalIsOpen}
      />

      <ReservationModal
        reservationModalIsOpen={reservationModalIsOpen}
        setReservationModalIsOpen={setReservationModalIsOpen}
        wantedReservations={wantedReservations}
        setWantedReservations={setWantedReservations}
        setIsChoosingMoreServices={setIsChoosingMoreServices}
      />
      <Footer />
    </>
  );
}
