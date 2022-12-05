import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import renderToast from "../../utils/renderToast";
import HeaderSection from "../../components/HeaderSection";

import ProfileReservationsSection from "../../components/ProfileReservationsSection";
import Loading from "../../components/Loading";
import CancelReservationModal from "../../components/CancelReservationModal";

export default function ProfileReservationsPage() {
  const { token } = useUserContext();
  const [reservationsArray, setReservationsArray] = useState();

  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);
  const [eventId, setEventId] = useState();

  useEffect(() => {
    renderPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function renderPage() {
    const promise = await api.getReservations(token);
    if (promise.status === 200) {
      setReservationsArray(promise.data);
      return;
    }
    return renderToast(
      "error",
      "Erro ao carregar serviços, por favor recarregue a página"
    );
  }

  if (!reservationsArray) {
    return (
      <>
        <HeaderSection page="profile" title="Reservas" />
        <Loading />
      </>
    );
  }

  return (
    <>
      <HeaderSection page="profile" title="Reservas" />
      <ProfileReservationsSection
        reservationsArray={reservationsArray}
        setConfirmationIsOpen={setConfirmationIsOpen}
        setEventId={setEventId}
      />

      <CancelReservationModal
        confirmationIsOpen={confirmationIsOpen}
        setConfirmationIsOpen={setConfirmationIsOpen}
        renderPage={renderPage}
        eventId={eventId}
      />
    </>
  );
}
