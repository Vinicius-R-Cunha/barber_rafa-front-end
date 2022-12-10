import {
  StyledModal,
  ModalHeader,
  AddCancelServices,
  Title,
  DateStatus,
  modalStyles,
} from "./style";
import "react-calendar/dist/Calendar.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import * as api from "../../services/api";
import { useUserContext } from "../../contexts/UserContext";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { displayServiceNames, sumDurations } from "./convertionFunctions";
import ScheduleContainer from "./ScheduleContainer";
import Calendar from "../Calendar";
import dayjs from "dayjs";

export default function ReservationModal({
  reservationModalIsOpen,
  setReservationModalIsOpen,
  reservationsList,
  setReservationsList,
  setIsChoosingMoreServices,
}) {
  const { token, userData } = useUserContext();

  const [scheduleArray, setScheduleArray] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [day, setDay] = useState();
  const [loadingSchedule, setLoadingSchedule] = useState(false);

  function closeModal(resetReservations = true) {
    document.body.style.overflow = "unset";
    setReservationModalIsOpen(false);
    setScheduleArray(null);
    setDay();
    if (resetReservations) {
      setReservationsList([]);
      setIsChoosingMoreServices(false);
    }
  }

  async function handleCalendarClick(e) {
    const startTime = dayjs(e).toISOString();
    const endTime = dayjs(e).add(1, "day").add(-1, "m").toISOString();
    const duration = sumDurations(reservationsList);

    setLoadingSchedule(true);
    const response = await api.checkAvailability(token, {
      startTime,
      endTime,
      duration,
    });
    setLoadingSchedule(false);

    scrollToBottom();
    setDay(e);
    setScrollX(0);
    setSelectedTime("");

    if (response.status === 200) return setScheduleArray(response.data);

    return renderToast(
      "error",
      "Erro ao carregar os horários, por favor tente novamente"
    );
  }

  function scrollToBottom() {
    const modal = document.getElementById("reservation-modal").parentElement;
    modal.style.scrollBehavior = "smooth";
    modal.scrollTo(0, modal.scrollHeight);
  }

  async function handleReservation() {
    const reservationTime = selectedTime.split(":");
    const startTime = new Date(day);
    startTime.setHours(reservationTime[0] - 3, reservationTime[1], 0);

    const response = await api.createCalendarEvent(token, {
      startTime: startTime.toISOString(),
      duration: sumDurations(reservationsList),
      summary: userData?.name,
      description: `Serviço(s): ${displayServiceNames(
        reservationsList
      )}, Telefone: ${
        userData?.phone
      }, horário: ${selectedTime}, duração: ${sumDurations(reservationsList)}`,
    });
    closeModal();

    if (response.status === 201)
      return renderToast("success", "Horário agendado!");

    return renderToast(
      "error",
      "Erro ao agendar seu horário, por favor tente novamente."
    );
  }

  return (
    <StyledModal
      id="reservation-modal"
      isOpen={reservationModalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <IoClose className="close-icon" onClick={closeModal} />
      <ModalHeader>
        {reservationsList.map((data, i, arr) => (
          <Title key={data?._id}>
            {i === arr.length - 1 ? data?.name : `${data?.name} + `}
          </Title>
        ))}
      </ModalHeader>

      <Calendar handleCalendarClick={handleCalendarClick} />

      {scheduleArray === null && (
        <DateStatus>Selecione uma data para reserva</DateStatus>
      )}
      {scheduleArray?.length === 0 && (
        <DateStatus>Não temos horários disponíveis</DateStatus>
      )}
      {loadingSchedule && <DateStatus>{renderDotsLoading()}</DateStatus>}
      {scheduleArray?.length > 0 && (
        <>
          <DateStatus>Selecione um horário :</DateStatus>
          <ScheduleContainer
            scrollX={scrollX}
            setScrollX={setScrollX}
            scheduleArray={scheduleArray}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            handleReservation={handleReservation}
            reservationsList={reservationsList}
          />
        </>
      )}
      <AddCancelServices>
        <button onClick={closeModal}>Cancelar</button>
        <button
          onClick={() => {
            setIsChoosingMoreServices(true);
            closeModal(false);
          }}
        >
          Adicionar outro serviço
        </button>
      </AddCancelServices>
    </StyledModal>
  );
}
