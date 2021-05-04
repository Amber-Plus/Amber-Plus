import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { renderToString } from "react-dom/server";
import { Marker, LayerGroup, CircleMarker } from "react-leaflet";
import L from "leaflet";
import EventButton from "./EventButton";
import EventPopup from "./EventPopup";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
  eventButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    border: "none",
    outline: 0,
    minWidth: 0,
    padding: 0,
    transform: "translate3d(0px, 35px, 0px)",
  },
  personMarker: {
    border: `1.5px solid white`,
    borderRadius: "50%",
    boxShadow: `0px 0px 20px 3px white`,
    width: 50,
    height: 50,
    objectFit: "cover",
  },
  circleMarker: {
    border: "none",
    display: "flex",
    outline: 0,
    padding: 0,
    position: "relative",
    minWidth: 0,
    transform: "translate3d(0px, 55px, 0px)",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function EventMarker({ person = null, isOpen = false, eventType = "" }) {
  const classes = useStyles();
  const position = {
    lat: person.position.latitude,
    lng: person.position.longitude,
  };
  const img = `/uploads/${person.image}`;

  const iconHtml = renderToString(
    <div className={classes.eventButton}>
      <EventButton eventType={eventType} active={isOpen}>
        {person ? (
          <img src={img} alt={person.name} className={classes.personMarker} />
        ) : (
          <RoomIcon />
        )}
      </EventButton>
    </div>
  );

  const divIcon = L.divIcon({
    html: iconHtml,
    className: "", // overrides leaflet icon class
  });

  return (
    <>
      <LayerGroup>
        <CircleMarker
          center={position}
          pathOptions={{ fillColor: "red" }}
          radius={50}
          stroke={false}
          className={classes.circleMarker}
        />
        <Marker position={position} icon={divIcon}>
          <EventPopup person={person} />
        </Marker>
      </LayerGroup>
    </>
  );
}

export default EventMarker;
