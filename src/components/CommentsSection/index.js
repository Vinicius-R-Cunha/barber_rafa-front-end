import {
  Container,
  Title,
  Spacer,
  StyledScrollContainer,
  Comment,
  Quote,
  Description,
  Author,
} from "./style";
import quote from "../../assets/quote.png";
import { useState } from "react";

export default function CommentsSection() {
  const [cursorStyle, setCursorStyle] = useState("pointer");
  const commentsArray = [
    {
      _id: 1,
      description:
        "Excelente profissional, atencioso ao estilo que o cliente pede e técnico na execução !",
      author: "Thomas M",
    },
    {
      _id: 2,
      description:
        "Profissional dedicado, preparado e tem o dom + a tecnica para desenvolver um otimo trabalho!",
      author: "Diego F",
    },
    {
      _id: 3,
      description:
        "Rafa é um excelente profissional, sempre aplicando seus conhecimentos com a vontade de cada cliente atingindo um nível de satisfação muito alto.",
      author: "Jefferson O",
    },
    {
      _id: 4,
      description:
        "Excelentemente atendimento, já sou cliente, mas hoje levei meu filho pra cortar o cabelo, e mais uma vez o Rafa deu um show no atendimento! Já ganhou mais um mini cliente hahah!!",
      author: "Rafael V",
    },
  ];

  return (
    <Container>
      <Title>Avaliações de Clientes</Title>
      <Spacer />
      <StyledScrollContainer
        cursorStyle={cursorStyle}
        onScroll={() => setCursorStyle("grabbing")}
        onEndScroll={() => setCursorStyle("pointer")}
      >
        {commentsArray.map((comment) => {
          return (
            <Comment key={comment._id}>
              <Quote src={quote} alt="" />
              <Description>{comment.description}</Description>
              <Author>{comment.author}</Author>
            </Comment>
          );
        })}
      </StyledScrollContainer>
    </Container>
  );
}
