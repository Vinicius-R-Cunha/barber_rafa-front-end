import { Container } from "./style";
import loading from "../../assets/loading.svg";

export default function Loading() {
  return (
    <Container>
      <img src={loading} alt="" />
    </Container>
  );
}
