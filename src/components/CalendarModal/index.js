import {
    StyledModal,
    ModalHeader,
    DateStatus,
    ScheduleContainer,
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
import { useContext, useState } from "react";
import * as api from "../../services/api";
import UserContext from "../../contexts/UserContext";
// import ScrollContainer from "react-indiana-drag-scroll";

export default function CalendarModal({
    reservationModalIsOpen,
    setReservationModalIsOpen,
    reservation,
}) {
    const { token } = useContext(UserContext);
    const [scheduleArray, setScheduleArray] = useState(null);
    const [scrollX, setScrollX] = useState(0);

    function closeModal() {
        document.body.style.overflow = "unset";
        setReservationModalIsOpen(false);
        setScheduleArray(null);
    }

    async function handleClick(e) {
        const startTime = e.toISOString();
        const endTime = new Date(e.setUTCHours(23, 0, 0, 0)).toISOString();

        const schedule = await api.checkAvailability(token, {
            startTime,
            endTime,
        });

        setScheduleArray(schedule);
        setScrollX(0);
    }

    function handleDisabledTiles(e) {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        return yesterday > e.date;
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
                            {/* <ScrollContainer
                                    className="inside-scroll"
                                    style={{
                                        marginLeft: scrollX,
                                        width: scheduleArray.length * 110 - 20,
                                        transition: "all ease 0.9s",
                                    }}
                                >
                                    {scheduleArray?.map((time) => {
                                        return (
                                            <Timetable key={time}>{time}</Timetable>
                                        );
                                    })}
                                </ScrollContainer> */}
                            <div
                                className="inside-scroll"
                                style={{
                                    marginLeft: scrollX,
                                    width: scheduleArray.length * 114 - 20,
                                    transition: "all ease 0.9s",
                                }}
                            >
                                {scheduleArray?.map((time) => {
                                    return (
                                        <Timetable key={time}>{time}</Timetable>
                                    );
                                })}
                            </div>
                        </div>
                    </ScheduleContainer>
                </>
            )}
        </StyledModal>
    );
}
