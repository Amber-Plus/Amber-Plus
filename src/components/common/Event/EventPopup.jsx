import React from "react";
import { Popup } from "react-leaflet";
import Typography from "@material-ui/core/Typography";

const EventPopup = ({ person }) => {
  return (
    <Popup>
      <Typography>{person.name}</Typography>
    </Popup>
  );
};

export default EventPopup;
