import { useContext, useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import * as api from "../../services/api";
import { toast } from "react-toastify";
import HeaderSection from "../../components/HeaderSection";
import Footer from "../../components/Footer";
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

  if (!reservationsArray) {
    return (
      <>
        <HeaderSection page="profile" title="Reservas" />
        <Loading />
        <Footer />
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
      <Footer />
    </>
  );
}
