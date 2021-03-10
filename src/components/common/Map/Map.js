import React from "react";
import { renderToString } from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import RoomIcon from "@material-ui/icons/Room";

const iconHtml = renderToString(<RoomIcon />);

const divIcon = L.divIcon({
  html: iconHtml,
  className: "", // overrides leaflet icon class
});

const Map = () => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={divIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
