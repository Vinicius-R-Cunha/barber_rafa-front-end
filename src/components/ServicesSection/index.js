import { useContext, useState } from "react";
import ReadMoreModal from "../ReadMoreModal";
import UserContext from "../../contexts/UserContext";
import ReservationModal from "../ReservationModal";
import {
  Container,
  Category,
  Services,
  Service,
  NamePrice,
  Description,
  ButtonContainer,
  ReadMore,
} from "./style";

export default function ServicesSection({ categoriesArray }) {
  const { token, setAuthenticationIsOpen } = useContext(UserContext);
  const [readMoreModalIsOpen, setReadMoreModalIsOpen] = useState(false);

  const [serviceData, setServiceData] = useState();
  const [reservationModalIsOpen, setReservationModalIsOpen] = useState(false);

  function readMore(service) {
    setReadMoreModalIsOpen(true);
    setServiceData(service);
    document.body.style.overflow = "hidden";
  }

  function handleReservation(service) {
    setServiceData(service);
    if (!token) {
      setAuthenticationIsOpen(true);
      document.body.style.overflow = "hidden";
      return;
    }
    setReservationModalIsOpen(true);
    document.body.style.overflow = "hidden";
    return;
  }

  function formatPrice(price) {
    const newPrice = price / 100;
    return newPrice.toFixed(2).replace(".", ",");
  }

  return (
    <>
      <Container>
        {categoriesArray?.map((category) => {
          return (
            <Category key={category?._id}>
              <p className="category-title">{category?.title}</p>
              <Services>
                {category?.services?.map((service) => {
                  return (
                    <Service key={service?._id}>
                      <NamePrice>
                        <p className="name">{service?.name}</p>
                        <p className="price">{`R$ ${service?.price}`}</p>
                      </NamePrice>
                      <Description>{service?.description}</Description>
                      {service?.description !== "" && (
                        <ReadMore onClick={() => readMore(service)}>
                          Ler mais...
                        </ReadMore>
                      )}
                      <ButtonContainer>
                        <p className="duration">{service?.duration}</p>
                        <button onClick={() => handleReservation(service)}>
                          Reservar
                        </button>
                      </ButtonContainer>
                    </Service>
                  );
                })}
              </Services>
            </Category>
          );
        })}
      </Container>

      <ReadMoreModal
        readMoreModalIsOpen={readMoreModalIsOpen}
        setReadMoreModalIsOpen={setReadMoreModalIsOpen}
        serviceData={serviceData}
        setReservationModalIsOpen={setReservationModalIsOpen}
      />

      <ReservationModal
        reservationModalIsOpen={reservationModalIsOpen}
        setReservationModalIsOpen={setReservationModalIsOpen}
        serviceData={serviceData}
      />
    </>
  );
}
