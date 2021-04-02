import React from "react";
import { Popup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  popup: {
    "&> .leaflet-popup-content-wrapper": {
      borderRadius: theme.spacing(9),
      "&> .leaflet-popup-content p": {
        margin: 0,
      },
      padding: theme.spacing(1, 5, 4.5),
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
}));

const EventPopup = ({ person }) => {
  const classes = useStyles();

  return (
    <Popup className={classes.popup} offset={[0, 40]}>
      <div className={classes.container}>
        <Typography
          component="div"
          className={`${classes.title} ${classes.text}`}
        >
          {person.name}
        </Typography>
        <Typography>Age: {person.age}</Typography>
        <Typography>Last seen {person.location.line1}</Typography>
      </div>
    </Popup>
  );
};

export default EventPopup;
