import { useContext, useState } from "react";
import ReadMoreModal from "../ReadMoreModal";
import CalendarModal from "../CalendarModal";
import UserContext from "../../contexts/UserContext";
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
import { ToastContainer } from "react-toastify";

export default function ServicesSection({ categoriesArray }) {
    const { token, setAuthenticationIsOpen } = useContext(UserContext);
    const [readMoreModalIsOpen, setReadMoreModalIsOpen] = useState(false);
    const [serviceData, setServiceData] = useState();

    const [reservationModalIsOpen, setReservationModalIsOpen] = useState(false);
    const [reservation, setReservation] = useState();

    function readMore(service) {
        setReadMoreModalIsOpen(true);
        setServiceData(service);
        document.body.style.overflow = "hidden";
    }

    function handleReservation(service) {
        setReservation(service);
        if (!token) {
            setAuthenticationIsOpen(true);
            document.body.style.overflow = "hidden";
        } else {
            setReservationModalIsOpen(true);
            document.body.style.overflow = "hidden";
        }
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
                                                <p className="name">
                                                    {service?.name}
                                                </p>
                                                <p className="price">{`R$ ${formatPrice(
                                                    service?.price
                                                )}`}</p>
                                            </NamePrice>
                                            <Description>
                                                {service?.description}
                                            </Description>
                                            {service?.description !== "" && (
                                                <ReadMore
                                                    onClick={() =>
                                                        readMore(service)
                                                    }
                                                >
                                                    Ler mais...
                                                </ReadMore>
                                            )}
                                            <ButtonContainer>
                                                <p className="duration">
                                                    {service?.duration}
                                                </p>
                                                <button
                                                    onClick={() =>
                                                        handleReservation(
                                                            service
                                                        )
                                                    }
                                                >
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
                formatPrice={formatPrice}
                reservationModalIsOpen={reservationModalIsOpen}
                setReservationModalIsOpen={setReservationModalIsOpen}
                reservation={reservation}
            />

            <CalendarModal
                reservationModalIsOpen={reservationModalIsOpen}
                setReservationModalIsOpen={setReservationModalIsOpen}
                reservation={reservation}
                formatPrice={formatPrice}
            />

            <ToastContainer />
        </>
    );
}
