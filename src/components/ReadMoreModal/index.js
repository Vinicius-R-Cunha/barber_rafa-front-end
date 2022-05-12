import { StyledModal, modalStyles } from "./style";

export default function ReadMoreModal({
    modalIsOpen,
    setModalIsOpen,
    serviceData,
}) {
    return (
        <StyledModal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={modalStyles}
        >
            <div>
                <div onClick={() => setModalIsOpen(false)}>Fechar</div>
                <p>ADULTO E ADOLESCENTE</p>
            </div>
            <p>R$ 40,00</p>
            <p>30min</p>
            <button>Reservar</button>
        </StyledModal>
    );
}
