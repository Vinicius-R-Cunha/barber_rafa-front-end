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
import commentsArray from "../../data/CommentsSection";

export default function CommentsSection() {
  const [cursorStyle, setCursorStyle] = useState("pointer");

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
            <Comment key={comment.id}>
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
