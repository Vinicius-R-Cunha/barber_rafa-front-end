import {
  StyledModal,
  ModalHeader,
  AddCancelServices,
  Title,
  DateStatus,
  modalStyles,
  Button,
} from "./style";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import * as api from "../../services/api";
import { useUserContext } from "../../contexts/UserContext";
import renderToast from "../../utils/renderToast";
import { renderDotsLoading } from "../../utils/renderDotsLoading";
import { getDescription, sumDurations } from "./auxiliarFunctions";
import ScheduleContainer from "./ScheduleContainer";
import Calendar from "../Calendar";
import dayjs from "dayjs";
import Modal from "../Modal";
import { useRef } from "react";

export default function ReservationModal({
  reservationModalIsOpen: openModal,
  setReservationModalIsOpen: setOpenModal,
  reservationsList,
  setReservationsList,
  setIsChoosingMoreServices,
}) {
  const { token, userData } = useUserContext();

  const modalRef = useRef(null);

  const [scheduleArray, setScheduleArray] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [day, setDay] = useState();
  const [loadingSchedule, setLoadingSchedule] = useState(false);

  function closeModal(resetReservations = true) {
    document.body.style.overflow = "unset";
    setOpenModal(false);
    setScheduleArray(null);
    setDay();
    if (resetReservations) {
      setReservationsList([]);
      setIsChoosingMoreServices(false);
    } else {
      setIsChoosingMoreServices(true);
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
    setTimeout(scrollToBottom, 0);

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
    const modal = document.getElementById("modal");
    modal.style.scrollBehavior = "smooth";
    modal.scrollTo(0, modal.scrollHeight);
  }

  async function handleReservation() {
    const [hour, minute] = selectedTime.split(":");
    const startTime = dayjs(day)
      .add(+hour - 3, "h")
      .add(minute, "m")
      .toISOString();

    const response = await api.createCalendarEvent(token, {
      startTime,
      duration: sumDurations(reservationsList),
      summary: userData?.name,
      description: getDescription(
        reservationsList,
        selectedTime,
        userData?.phone
      ),
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
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={modalStyles}
    >
      <ModalHeader>
        {reservationsList.map((data, i, arr) => (
          <Title key={i}>
            {i === arr.length - 1 ? data?.name : `${data?.name} + `}
          </Title>
        ))}
      </ModalHeader>

      <Calendar handleCalendarClick={handleCalendarClick} />

      {scheduleArray === null && (
        <DateStatus>Selecione uma data para reserva</DateStatus>
      )}
      {scheduleArray?.length === 0 && (
        <DateStatus>Não temos horários disponíveis nessa data</DateStatus>
      )}
      {loadingSchedule && <DateStatus>{renderDotsLoading()}</DateStatus>}
      {!loadingSchedule && scheduleArray?.length > 0 && (
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
        <Button onClick={closeModal}>Cancelar</Button>
        <Button onClick={() => closeModal(false)}>
          Adicionar outro serviço
        </Button>
      </AddCancelServices>
    </Modal>
  );
}
