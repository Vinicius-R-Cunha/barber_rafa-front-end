import { Container } from "./style";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";

export default function SocialIcons() {
  return (
    <Container>
      <AiOutlineInstagram
        className="icon"
        onClick={() =>
          window.open("https://www.instagram.com/barberafamacedo/", "_blank")
        }
      />
      <RiFacebookFill
        className="icon"
        onClick={() =>
          window.open(
            "https://m.facebook.com/BarberRafaMacedo/?ref=bookmarks",
            "_blank"
          )
        }
      />
    </Container>
  );
}
