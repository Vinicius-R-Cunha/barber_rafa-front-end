import { Container, StyledScrollContainer, Image } from "./style";
import { useState } from "react";
import galleryArray from "../../data/Gallery";

export default function Gallery() {
  const [cursorStyle, setCursorStyle] = useState("pointer");

  return (
    <Container>
      <StyledScrollContainer
        cursorStyle={cursorStyle}
        onScroll={() => setCursorStyle("grabbing")}
        onEndScroll={() => setCursorStyle("pointer")}
      >
        {galleryArray.map((img) => (
          <Image key={img.id} src={img.src} alt="" />
        ))}
      </StyledScrollContainer>
    </Container>
  );
}
