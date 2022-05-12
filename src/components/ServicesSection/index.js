import { useState } from "react";
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
    function formatPrice(price) {
        const newPrice = price / 100;
        return newPrice.toFixed(2).replace(".", ",");
    }

    return (
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
                                            <ReadMore>Ler mais...</ReadMore>
                                        )}
                                        <ButtonContainer>
                                            <p className="duration">
                                                {service?.duration}
                                            </p>
                                            <button>Reservar</button>
                                        </ButtonContainer>
                                    </Service>
                                );
                            })}
                        </Services>
                    </Category>
                );
            })}
        </Container>
    );
}
