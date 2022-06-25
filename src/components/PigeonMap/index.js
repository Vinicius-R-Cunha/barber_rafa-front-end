import { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { Container, MapContainer } from "./style";

export default function PigeonMap() {
  const lat = -23.525438021785874;
  const lon = -46.50453847304112;

  const [center, setCenter] = useState([lat, lon]);
  const [zoom, setZoom] = useState(15);

  return (
    <Container>
      <MapContainer>
        <Map
          height={400}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
          style={{ padding: "0 60px" }}
        >
          <ZoomControl />
          <Marker width={50} anchor={[lat, lon]} />
        </Map>
      </MapContainer>
    </Container>
  );
}
