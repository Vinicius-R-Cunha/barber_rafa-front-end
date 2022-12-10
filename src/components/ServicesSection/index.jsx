import { useDataContext } from "../../contexts/DataContext";
import {
  Container,
  Category,
  Title,
  Services,
  Service,
  NamePrice,
  Description,
  ReadMore,
  ButtonContainer,
  Duration,
  Button,
} from "./style";

export default function ServicesSection({
  readMore,
  handleReservation,
  isChoosingMoreServices,
}) {
  const { categoriesArray } = useDataContext();

  return (
    <Container>
      {categoriesArray?.map((category) => {
        return (
          <Category key={category?._id}>
            <Title>{category?.title}</Title>
            <Services>
              {category?.services?.map((service) => {
                return (
                  <Service key={service?._id}>
                    <NamePrice>
                      <p>{service?.name}</p>
                      <p>{`R$ ${service?.price}`}</p>
                    </NamePrice>
                    <Description>{service?.description}</Description>
                    {service?.description !== "" && (
                      <ReadMore onClick={() => readMore(service)}>
                        Ler mais...
                      </ReadMore>
                    )}
                    <ButtonContainer>
                      <Duration>{service?.duration}</Duration>
                      <Button onClick={() => handleReservation(service)}>
                        {isChoosingMoreServices ? "Adicionar" : "Reservar"}
                      </Button>
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
