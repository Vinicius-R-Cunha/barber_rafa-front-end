import { Container, StyledScrollContainer, Image } from "./style";
import photo1 from "../../assets/gallery_photo1.jpeg";
import { useState } from "react";

export default function Gallery() {
  const [cursorStyle, setCursorStyle] = useState("pointer");

  return (
    <Container>
      <StyledScrollContainer
        cursorStyle={cursorStyle}
        onScroll={() => setCursorStyle("grabbing")}
        onEndScroll={() => setCursorStyle("pointer")}
      >
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
        <Image src={photo1} alt="" />
      </StyledScrollContainer>
    </Container>
  );
}
