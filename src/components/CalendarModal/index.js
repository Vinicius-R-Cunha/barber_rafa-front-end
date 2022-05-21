import {
    StyledModal,
    ModalHeader,
    DateStatus,
    ScheduleContainer,
    ButtonContainer,
    Timetable,
    modalStyles,
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

export default function CalendarModal({
    reservationModalIsOpen,
    setReservationModalIsOpen,
    reservation,
    formatPrice,
}) {
    const { token } = useContext(UserContext);
    const [scheduleArray, setScheduleArray] = useState(null);
    const [scrollX, setScrollX] = useState(0);
    const [selectedTime, setSelectedTime] = useState("");
    const [day, setDay] = useState();
    const [viewWidth, setViewWidth] = useState(0);

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
        const startTime = new Date(e).toISOString();

        const tomorrow = new Date(e);
        tomorrow.setDate(e.getDate() + 1);

        const endTime = new Date(
            tomorrow.setUTCHours(2, 59, 0, 0)
        ).toISOString();

        const duration = reservation.duration;

        const schedule = await api.checkAvailability(token, {
            startTime,
            endTime,
            duration,
        });
        setScheduleArray(schedule);
        setDay(e);

        setScrollX(0);
        setSelectedTime("");
    }

    async function handleReservation() {
        const reservationTime = selectedTime.split(":");
        const startTime = new Date(day);
        startTime.setHours(reservationTime[0] - 3, reservationTime[1], 0);

        const resp = await api.createCalendarEvent(token, {
            startTime: startTime.toISOString(),
            duration: reservation.duration,
            summary: reservation.name,
            description: "teste",
        });

        if (resp) {
            toast.success("Horário agendado!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error(
                "Erro ao agendar seu horário, por favor tente novamente.",
                {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
        }
        closeModal();
    }

    function handleDisabledTiles(e) {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        return yesterday > e.date;
    }

    function handleTimeSelection(time) {
        setSelectedTime(time);
    }

    function handleLeftArrow() {
        let x = scrollX + 350;
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    function handleRightArrow() {
        let x = scrollX - 350;
        //array size * (Timetable size + gap size) - last gap
        let listWidth = scheduleArray.length * 114 - 20;

        if (466 - listWidth > x) {
            x = 466 - listWidth;
        }

        setScrollX(x);
    }

    return (
        <StyledModal
            isOpen={reservationModalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => closeModal()}
            style={modalStyles}
        >
            <ModalHeader>
                <p className="modal-title">{reservation?.name}</p>
                <IoClose className="close-icon" onClick={() => closeModal()} />
            </ModalHeader>
            <Calendar
                className={["c1"]}
                calendarType={"US"}
                onClickDay={(e) => handleClick(e)}
                tileClassName={"tile"}
                tileDisabled={(e) => handleDisabledTiles(e)}
            />
            {scheduleArray === null && (
                <DateStatus>Selecione uma data para reserva</DateStatus>
            )}
            {scheduleArray?.length === 0 && (
                <DateStatus>Não temos horários disponíveis</DateStatus>
            )}
            {scheduleArray?.length !== 0 && scheduleArray !== null && (
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
                        <div className="scrollable-div">
                            {viewWidth < 1024 ? (
                                <ScrollContainer className="inside-scroll">
                                    {scheduleArray?.map((time) => {
                                        return (
                                            <Timetable
                                                key={time}
                                                onClick={() =>
                                                    handleTimeSelection(time)
                                                }
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
                                                onClick={() =>
                                                    handleTimeSelection(time)
                                                }
                                            >
                                                {time}
                                            </Timetable>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </ScheduleContainer>
                    {selectedTime !== "" && (
                        <ButtonContainer>
                            <div>
                                <p className="price">{`R$ ${formatPrice(
                                    reservation?.price
                                )}`}</p>
                                <p className="duration">
                                    {reservation?.duration}
                                </p>
                            </div>
                            <button
                                onClick={() => handleReservation()}
                            >{`Reservar horário - ${selectedTime}`}</button>
                        </ButtonContainer>
                    )}
                </>
            )}
        </StyledModal>
    );
}
