import { useState } from "react";
import ReadMoreModal from "../ReadMoreModal";
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
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [serviceData, setServiceData] = useState();

    function readMore(service) {
        setModalIsOpen(true);
        setServiceData(service);
        document.body.style.overflow = "hidden";
    }

    function handleReservation(service) {
        console.log(service);
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
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                serviceData={serviceData}
                formatPrice={formatPrice}
            />
        </>
    );
}
