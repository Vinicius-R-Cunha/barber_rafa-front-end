import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
    div {
        display: flex;
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
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
        width: "597px",
        position: "fixed",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#2c2c2c",
    },
};

export { StyledModal, modalStyles };
