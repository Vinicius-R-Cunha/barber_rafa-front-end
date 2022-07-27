import { Container, MapContainer } from "./style";

export default function GoogleMaps() {
  return (
    <Container>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.19665895433!2d-46.50673788446662!3d-23.525428184700765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce60bcf14a5393%3A0x221938016cb62396!2sR.%20Itingu%C3%A7u%2C%201085%20-%20Vila%20R%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003658-010!5e0!3m2!1spt-BR!2sbr!4v1658896946237!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </MapContainer>
    </Container>
  );
}
