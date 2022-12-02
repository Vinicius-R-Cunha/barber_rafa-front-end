import { useEffect, useState } from "react";
import * as api from "../../services/api";
import { useDataContext } from "../../contexts/DataContext";
import renderToast from "../../utils/renderToast";
import { useUserContext } from "../../contexts/UserContext";
import HeaderSection from "../../components/HeaderSection";
import ServicesSection from "../../components/ServicesSection";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import ReadMoreModal from "../../components/ReadMoreModal";
import ReservationModal from "../../components/ReservationModal";

export default function ServicesPage() {
  const { categoriesArray, setCategoriesArray } = useDataContext();
  const { token, setAuthenticationIsOpen } = useUserContext();

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
    return renderToast(
      "error",
      "Erro ao carregar serviços, por favor recarregue a página"
    );
  }

  function readMore(service) {
    setReadMoreModalIsOpen(true);
    setServiceData(service);
    document.body.style.overflow = "hidden";
  }

  function handleReservation(service) {
    if (!token) {
      setAuthenticationIsOpen(true);
      document.body.style.overflow = "hidden";
      return;
    }
    setWantedReservations([...wantedReservations, service]);
    setServiceData(service); //TEMP
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
