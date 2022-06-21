import { Container, Services, Service, Button } from "./style";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import CancelReservationModal from "../CancelReservationModal";

export default function ProfileSection({ reservationsArray, renderPage }) {
  const PHONE_NUMBER = "98747-9047";

  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);
  const [eventId, setEventId] = useState();

  function formatDate(startTime, endTime) {
    const newDate = new Date(startTime);
    const endDate = new Date(endTime);
    const day = newDate.getDate().toString().padStart(2, "0");
    const month = newDate.getMonth().toString().padStart(2, "0");
    const year = newDate.getFullYear().toString().padStart(2, "0");
    const startHour = newDate.getUTCHours().toString().padStart(2, "0");
    const startMinutes = newDate.getUTCMinutes().toString().padStart(2, "0");
    const endHour = endDate.getHours().toString().padStart(2, "0");
    const endMinutes = endDate.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} - ${startHour}:${startMinutes} até ${endHour}:${endMinutes}`;
  }

  return (
    <Container>
      {reservationsArray.length === 0 ? (
        <p className="message">Você não tem nenhuma reserva ativa</p>
      ) : (
        <Services>
          {reservationsArray?.map((data) => {
            return (
              <Service key={data?._id}>
                <p className="summary">{data?.summary}</p>
                <p className="date-time">
                  {formatDate(data?.startTime, data?.endTime)}
                </p>
                <div
                  className="remove-icon"
                  onClick={() => {
                    setConfirmationIsOpen(true);
                    setEventId(data?.eventId);
                  }}
                >
                  Cancelar reserva
                </div>
              </Service>
            );
          })}
        </Services>
      )}
      <p className="message margin-top">
        Deseja cancelar alguma reserva? Entre em contato:
      </p>

      <Button
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=5511${PHONE_NUMBER.replace(
              "-",
              ""
            )}`,
            "_blank"
          )
        }
      >
        Enviar mensagem
        <BsWhatsapp className="whats-icon" />
      </Button>

      <CancelReservationModal
        confirmationIsOpen={confirmationIsOpen}
        setConfirmationIsOpen={setConfirmationIsOpen}
        renderPage={renderPage}
        eventId={eventId}
      />
    </Container>
  );
}
