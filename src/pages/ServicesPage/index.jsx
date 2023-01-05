import { memo, useEffect, useState } from "react";
import * as api from "../../services/api";
import { useDataContext } from "../../contexts/DataContext";
import renderToast from "../../utils/renderToast";
import { useUserContext } from "../../contexts/UserContext";
import HeaderSection from "../../components/HeaderSection";
import ServicesSection from "../../components/ServicesSection";
import Loading from "../../components/Loading";
import ReadMoreModal from "../../components/ReadMoreModal";
import ReservationModal from "../../components/ReservationModal";
import { useCallback } from "react";
import { useAuthModalContext } from "../../contexts/AuthModalContext";

function ServicesPage() {
  const { categoriesArray, setCategoriesArray } = useDataContext();
  const { token } = useUserContext();
  const { openAuthenticationModal } = useAuthModalContext();

  const [readMoreModalIsOpen, setReadMoreModalIsOpen] = useState(false);
  const [reservationModalIsOpen, setReservationModalIsOpen] = useState(false);
  const [readMoreData, setReadMoreData] = useState();
  const [reservationsList, setReservationsList] = useState([]);
  const [isChoosingMoreServices, setIsChoosingMoreServices] = useState(false);

  useEffect(() => {
    if (categoriesArray === null) {
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

      renderPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const readMore = useCallback((service) => {
    setReadMoreModalIsOpen(true);
    document.body.style.overflow = "hidden";
    setReadMoreData(service);
  }, []);

  const handleReservation = useCallback(
    (service) => {
      if (!token) {
        openAuthenticationModal();
        return;
      }
      setReservationsList((prev) => [...prev, service]);
      setReservationModalIsOpen(true);
      document.body.style.overflow = "hidden";
      return;
    },
    [token]
  );

  return (
    <>
      <HeaderSection page={"services"} title="Serviços" />
      {categoriesArray === null ? (
        <Loading />
      ) : (
        <ServicesSection
          readMore={readMore}
          handleReservation={handleReservation}
          isChoosingMoreServices={isChoosingMoreServices}
        />
      )}

      <ReadMoreModal
        readMoreModalIsOpen={readMoreModalIsOpen}
        setReadMoreModalIsOpen={setReadMoreModalIsOpen}
        readMoreData={readMoreData}
        handleReservation={handleReservation}
      />

      <ReservationModal
        reservationModalIsOpen={reservationModalIsOpen}
        setReservationModalIsOpen={setReservationModalIsOpen}
        reservationsList={reservationsList}
        setReservationsList={setReservationsList}
        setIsChoosingMoreServices={setIsChoosingMoreServices}
      />
    </>
  );
}

export default memo(ServicesPage);
