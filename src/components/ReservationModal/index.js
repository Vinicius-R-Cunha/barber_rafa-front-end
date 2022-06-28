import {
  StyledModal,
  ModalHeader,
  Title,
  DateStatus,
  ScheduleContainer,
  ScrollableDiv,
  ButtonContainer,
  Timetable,
  Price,
  Duration,
  Button,
  modalStyles,
  toastStyles,
} from "./style";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { IoClose } from "react-icons/io5";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import * as api from "../../services/api";
import UserContext from "../../contexts/UserContext";
import ScrollContainer from "react-indiana-drag-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

export default function ReservationModal({
  reservationModalIsOpen,
  setReservationModalIsOpen,
  serviceData,
}) {
  const { token, userData } = useContext(UserContext);
  const [scheduleArray, setScheduleArray] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");
  const [day, setDay] = useState();
  const [viewWidth, setViewWidth] = useState(0);
  const [loadingSchedule, setLoadingSchedule] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", setViewWidth(window.innerWidth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  function closeModal() {
    document.body.style.overflow = "unset";
    setReservationModalIsOpen(false);
    setScheduleArray(null);
    setDay();
  }

  async function handleClick(e) {
    setLoadingSchedule(true);

    const { startTime, endTime, duration } = getTimes(e);
    const promise = await api.checkAvailability(token, {
      startTime,
      endTime,
      duration,
    });
    setLoadingSchedule(false);

    setDay(e);
    setScrollX(0);
    setSelectedTime("");

    if (promise.status === 200) return setScheduleArray(promise.data);

    return toast.error(
      "Erro ao carregar os horários, por favor tente novamente",
      toastStyles
    );
  }

  function getTimes(date) {
    const startTime = new Date(date).toISOString();
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);

    const endTime = new Date(tomorrow.setUTCHours(2, 59, 0, 0)).toISOString();

    const duration = serviceData.duration;

    return { startTime, endTime, duration };
  }

  async function handleReservation() {
    const reservationTime = selectedTime.split(":");
    const startTime = new Date(day);
    startTime.setHours(reservationTime[0] - 3, reservationTime[1], 0);

    const response = await api.createCalendarEvent(token, {
      startTime: startTime.toISOString(),
      duration: serviceData?.duration,
      summary: serviceData?.name,
      description: `Cliente: ${userData?.name}, Telefone: ${userData?.phone}, e-mail: ${userData?.email}, horário: ${selectedTime}, duração: ${serviceData?.duration}`,
    });
    closeModal();

    if (response.status === 201)
      return toast.success("Horário agendado!", toastStyles);

    return toast.error(
      "Erro ao agendar seu horário, por favor tente novamente.",
      toastStyles
    );
  }

  function handleDisabledTiles(e) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return yesterday > e.date;
  }

  function handleLeftArrow() {
    let margin = scrollX + 350;
    if (margin > 0) {
      margin = 0;
    }
    setScrollX(margin);
  }

  function handleRightArrow() {
    let margin = scrollX - 350;
    //array size * (Timetable size + gap size) - last gap
    let listWidth = scheduleArray.length * (94 + 20) - 20;
    const ScrollableDivSize = 469.797;

    if (ScrollableDivSize - listWidth > margin) {
      margin = ScrollableDivSize - listWidth;
    }
    setScrollX(margin);
  }

  return (
    <StyledModal
      isOpen={reservationModalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => closeModal()}
      style={modalStyles}
    >
      <ModalHeader>
        <Title>{serviceData?.name}</Title>
        <IoClose className="close-icon" onClick={() => closeModal()} />
      </ModalHeader>
      <Calendar
        className={["c1"]}
        calendarType={"US"}
        onClickDay={(e) => handleClick(e)}
        tileClassName={"tile"}
        tileDisabled={(e) => handleDisabledTiles(e)}
        minDate={new Date()}
        maxDate={new Date(new Date().setMonth(new Date().getMonth() + 2))}
      />
      {scheduleArray === null && (
        <DateStatus>Selecione uma data para reserva</DateStatus>
      )}
      {scheduleArray?.length === 0 && (
        <DateStatus>Não temos horários disponíveis</DateStatus>
      )}
      {loadingSchedule && (
        <DateStatus>
          <ThreeDots color="#E1E1E1" height={13} width={51} />
        </DateStatus>
      )}
      {scheduleArray?.length !== 0 &&
        scheduleArray !== null &&
        !loadingSchedule && (
          <>
            <DateStatus>Selecione um horário :</DateStatus>
            <ScheduleContainer>
              <BsFillArrowLeftCircleFill
                onClick={handleLeftArrow}
                className="nav-arrow-left"
              />
              <BsFillArrowRightCircleFill
                onClick={handleRightArrow}
                className="nav-arrow-right"
              />

              <ScrollableDiv>
                {viewWidth < 1024 ? (
                  <ScrollContainer className="inside-scroll">
                    {scheduleArray?.map((time) => {
                      return (
                        <Timetable
                          key={time}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Timetable>
                      );
                    })}
                  </ScrollContainer>
                ) : (
                  <div
                    className="inside-scroll"
                    style={{
                      marginLeft: scrollX,
                      width: scheduleArray?.length * 114 - 20,
                      transition: "all ease 0.9s",
                    }}
                  >
                    {scheduleArray?.map((time) => {
                      return (
                        <Timetable
                          key={time}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Timetable>
                      );
                    })}
                  </div>
                )}
              </ScrollableDiv>
            </ScheduleContainer>

            {selectedTime !== "" && (
              <ButtonContainer>
                <div>
                  <Price>{`R$ ${serviceData?.price}`}</Price>
                  <Duration>{serviceData?.duration}</Duration>
                </div>
                <Button
                  onClick={() => handleReservation()}
                >{`Reservar horário - ${selectedTime}`}</Button>
              </ButtonContainer>
            )}
          </>
        )}
    </StyledModal>
  );
}
