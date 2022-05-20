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
    justify-content: flex-end;

    padding-bottom: 40px;

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

export { StyledModal, ModalHeader, modalStyles };
