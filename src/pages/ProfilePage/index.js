import HeaderSection from "../../components/HeaderSection";
import Footer from "../../components/Footer";
import ProfileSection from "../../components/ProfileSection";
import Loading from "../../components/Loading";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import * as api from "../../services/api";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const { token } = useContext(UserContext);
  const [reservationsArray, setReservationsArray] = useState();

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
      <ProfileSection
        reservationsArray={reservationsArray}
        renderPage={renderPage}
      />
      <Footer />
    </>
  );
}
