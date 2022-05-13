import {
    StyledModal,
    ModalHeader,
    Description,
    ButtonContainer,
    modalStyles,
} from "./style";
import { IoClose } from "react-icons/io5";

export default function ReadMoreModal({
    modalIsOpen,
    setModalIsOpen,
    serviceData,
    formatPrice,
}) {
    function closeModal() {
        document.body.style.overflow = "unset";
        setModalIsOpen(false);
    }

    return (
        <StyledModal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => closeModal()}
            style={modalStyles}
        >
            <ModalHeader>
                <p className="modal-title">{serviceData?.name}</p>
                <IoClose className="close-icon" onClick={() => closeModal()} />
            </ModalHeader>
            <Description>{serviceData?.description}</Description>
            <ButtonContainer>
                <div>
                    <p className="price">{`R$ ${formatPrice(
                        serviceData?.price
                    )}`}</p>
                    <p className="duration">{serviceData?.duration}</p>
                </div>
                <button>Reservar</button>
            </ButtonContainer>
        </StyledModal>
    );
}
