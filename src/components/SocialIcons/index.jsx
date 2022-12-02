import { Container } from "./style";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

export default function SocialIcons() {
  const REACT_APP_INSTAGRAM_LINK = process.env.REACT_APP_INSTAGRAM_LINK;
  const REACT_APP_FACEBOOK_LINK = process.env.REACT_APP_FACEBOOK_LINK;

  return (
    <Container>
      <AiOutlineInstagram
        className="icon"
        onClick={() => window.open(REACT_APP_INSTAGRAM_LINK, "_blank")}
      />
      <RiFacebookFill
        className="icon"
        onClick={() => window.open(REACT_APP_FACEBOOK_LINK, "_blank")}
      />
    </Container>
  );
}
