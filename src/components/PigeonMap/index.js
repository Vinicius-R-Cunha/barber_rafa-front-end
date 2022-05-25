import { useEffect, useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function PigeonMap() {
    const lat = -23.525438021785874;
    const lon = -46.50453847304112;

    const [viewWidth, setViewWidth] = useState(0);

    const [center, setCenter] = useState([lat, lon]);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        window.addEventListener("resize", setViewWidth(window.innerWidth));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth]);

    return (
        <Map
            height={400}
            // width={viewWidth > 1170 ? 1170 : 300}
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
    );
}
