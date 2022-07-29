import {
  Container,
  Message,
  Services,
  Service,
  Summary,
  CancelButton,
  Button,
} from "./style";
import { BsWhatsapp } from "react-icons/bs";

export default function ProfileReservationsSection({
  reservationsArray,
  setConfirmationIsOpen,
  setEventId,
}) {
  const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER.replace("-", "");
  const whastAppLink = `https://api.whatsapp.com/send?phone=5511${PHONE_NUMBER}`;

  function formatDate(startTime, endTime) {
    const start = convertTimePlusThree(startTime);
    const end = new Date(endTime);

    return `${getDay(start)} - ${getHour(start)} até ${getHour(end)}`;
  }

  function convertTimePlusThree(date) {
    const newDate = new Date(date);
    return new Date(newDate.setTime(newDate.getTime() + 3 * 60 * 60 * 1000));
  }

  function getDay(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const year = date.getFullYear().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  function getHour(date) {
    const startHour = date.getHours().toString().padStart(2, "0");
    const startMinutes = date.getMinutes().toString().padStart(2, "0");

    return `${startHour}:${startMinutes}`;
  }

  return (
    <Container>
      {reservationsArray.length === 0 ? (
        <Message>Você não tem nenhuma reserva ativa</Message>
      ) : (
        <Services>
          {reservationsArray?.map((data) => {
            return (
              <Service key={data?._id}>
                <Summary>{data?.summary}</Summary>
                <Summary>{formatDate(data?.startTime, data?.endTime)}</Summary>
                <CancelButton
                  onClick={() => {
                    setConfirmationIsOpen(true);
                    setEventId(data?.eventId);
                  }}
                >
                  Cancelar reserva
                </CancelButton>
              </Service>
            );
          })}
        </Services>
      )}
      <Message marginTop={"100px"}>
        Problemas com alguma reserva? Entre em contato:
      </Message>

      <Button onClick={() => window.open(whastAppLink, "_blank")}>
        Enviar mensagem
        <BsWhatsapp className="whats-icon" />
      </Button>
    </Container>
  );
}
