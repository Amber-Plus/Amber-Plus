import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { renderToString } from "react-dom/server";
import { Marker, LayerGroup, CircleMarker } from "react-leaflet";
import L from "leaflet";
import EventButton from "./EventButton";
import EventPopup from "./EventPopup";
import RoomIcon from "@material-ui/icons/Room";
import getPostTimeDifference from "utils/getPostTimeDifference";
import getLatLng from "utils/getLatLng";

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

function EventMarker({ person = null, position, isProfile }) {
  const classes = useStyles();
  const [pos, setPos] = useState();
  const img = `/uploads/${person.image}`;

  const offset =
    getPostTimeDifference(person) < 40 ? getPostTimeDifference(person) : 40;
  const time = 40 + offset;

  //need to grab LatLng coords of each person if on Search page
  //duplicative code since this could've been done via update position attribute of personAlert schema, but time be presssed
  useEffect(() => {
    async function getPosition() {
      person && setPos(await getLatLng(person.location));
    }
    !isProfile && getPosition();
  }, [person, isProfile]);

  const iconHtml = renderToString(
    <div className={classes.eventButton}>
      <EventButton>
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
      {(pos || position) && (
        <LayerGroup>
          <CircleMarker
            center={position ? position : pos}
            pathOptions={{ fillColor: "red" }}
            radius={time}
            stroke={false}
            className={classes.circleMarker}
          />
          <Marker position={position ? position : pos} icon={divIcon}>
            <EventPopup person={person} />
          </Marker>
        </LayerGroup>
      )}
    </>
  );
}

export default EventMarker;
