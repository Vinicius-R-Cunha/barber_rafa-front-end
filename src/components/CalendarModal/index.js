import { StyledModal, ModalHeader, modalStyles } from "./style";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import * as api from "../../services/api";
import UserContext from "../../contexts/UserContext";

export default function CalendarModal({
    reservationModalIsOpen,
    setReservationModalIsOpen,
    reservation,
}) {
    const { token } = useContext(UserContext);
    const [scheduleArray, setScheduleArray] = useState();

    function closeModal() {
        document.body.style.overflow = "unset";
        setReservationModalIsOpen(false);
    }

    async function handleClick(e) {
        const startTime = e.toISOString();
        const endTime = new Date(e.setUTCHours(23, 0, 0, 0)).toISOString();

        const schedule = await api.checkAvailability(token, {
            startTime,
            endTime,
        });

        setScheduleArray(schedule);
    }

    function handleDisabledTiles(e) {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        return yesterday > e.date;
    }

    return (
        <StyledModal
            isOpen={reservationModalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => closeModal()}
            style={modalStyles}
        >
            <ModalHeader>
                <IoClose className="close-icon" onClick={() => closeModal()} />
            </ModalHeader>
            <Calendar
                className={["c1"]}
                calendarType={"US"}
                onClickDay={(e) => handleClick(e)}
                tileDisabled={(e) => handleDisabledTiles(e)}
            />
            {scheduleArray?.length === 0 && (
                <p>Não temos horários disponíveis</p>
            )}
        </StyledModal>
    );
}
