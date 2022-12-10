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
import dayjs from "dayjs";

export default function ProfileReservationsSection({
  reservationsArray,
  openCancelConfirmation,
}) {
  const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER.replace("-", "");
  const whastAppLink = `https://api.whatsapp.com/send?phone=5511${PHONE_NUMBER}`;

  function formatDate(startTime, endTime) {
    const start = dayjs(startTime).add(3, "h");
    const end = dayjs(endTime);

    return (
      end.format("DD/MM/YYYY") +
      " - " +
      start.format("HH:mm") +
      " até " +
      end.format("HH:mm")
    );
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
                  onClick={() => openCancelConfirmation(data?.eventId)}
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
