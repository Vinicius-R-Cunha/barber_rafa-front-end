import { useCallback, useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import HeaderSection from "../../components/HeaderSection";
import ProfileReservationsSection from "../../components/ProfileReservationsSection";
import Loading from "../../components/Loading";
import CancelReservationModal from "../../components/CancelReservationModal";

export default function ProfileReservationsPage() {
  const { token } = useUserContext();

  const [reservationsArray, setReservationsArray] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [eventId, setEventId] = useState();

  useEffect(() => {
    renderPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPage = useCallback(async () => {
    const promise = await api.getReservations(token);
    if (promise.status === 200) {
      setReservationsArray(promise.data);
      return;
    }

    return renderToast(
      "error",
      "Erro ao carregar serviços, por favor recarregue a página"
    );
  }, []);

  const openCancelConfirmation = useCallback((eventId) => {
    document.body.style.overflow = "hidden";
    setOpenModal(true);
    setEventId(eventId);
  }, []);

  return (
    <>
      <HeaderSection page="profile" title="Reservas" />

      {reservationsArray === null ? (
        <Loading />
      ) : (
        <ProfileReservationsSection
          reservationsArray={reservationsArray}
          openCancelConfirmation={openCancelConfirmation}
        />
      )}

      <CancelReservationModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        renderPage={renderPage}
        eventId={eventId}
      />
    </>
  );
}
