import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalHeader = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding-bottom: 30px;
    .modal-title {
        width: 75%;

        font-family: "Teko";
        font-size: 1.888rem;
        font-weight: 500;
        line-height: 1em;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #e1e1e1;
    }

    .close-icon {
        font-size: 1.888rem;
        color: #e1e1e1;

        margin-top: -5px;
        margin-right: -14px;

        cursor: pointer;
    }

    @media (max-width: 640px) {
        width: 65%;
    }

    @media (max-width: 424px) {
        width: 59%;

        .close-icon {
            margin-top: -5px;
            margin-right: -6px;
        }
    }

    @media (max-width: 340px) {
        width: 50%;

        .close-icon {
            margin-top: -5px;
            margin-right: -6px;
        }
    }
`;

const DateStatus = styled.p`
    font-family: "Montserrat";
    font-size: 1.275rem;
    font-weight: 800;
    line-height: 1em;
    letter-spacing: 0.7px;
    color: #e1e1e1;

    margin-top: 35px;
`;

const ScheduleContainer = styled.div`
    width: 90%;

    margin-top: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    .scrollable-div {
        width: 90%;
        height: 100%;

        display: flex;
        align-items: center;
        overflow: hidden;

        .inside-scroll {
            width: 100%;
            height: 100%;

            display: flex;

            gap: 20px;
        }
    }

    .nav-arrow-left {
        font-size: 2rem;
        color: #e1e1e1;

        position: absolute;
        left: -10px;

        cursor: pointer;
    }

    .nav-arrow-right {
        font-size: 2rem;
        color: #e1e1e1;

        position: absolute;
        right: -10px;

        cursor: pointer;
    }
`;

const Timetable = styled.p`
    width: 70px;

    font-family: "Montserrat";
    font-size: 1.075rem;
    font-weight: 400;
    line-height: 1em;
    letter-spacing: 0.7px;
    color: #e1e1e1;

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;

    padding: 12px 10px;

    border-radius: 5px;
    border: 2px solid #96885f;

    cursor: pointer;

    :hover {
        transition: 0.3s ease-out;
        background-color: #96885f;
    }
`;

const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "100px 0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        overflowY: "auto",
        overflowX: "hidden",
    },
    content: {
        width: "650px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#2c2c2c",
        border: "hidden",
        boxSizing: "border-box",
        padding: "20px 35px 60px 35px",
        borderRadius: "4px",
    },
};

export {
    StyledModal,
    ModalHeader,
    DateStatus,
    ScheduleContainer,
    Timetable,
    modalStyles,
};
