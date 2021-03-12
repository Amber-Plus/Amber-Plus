import React from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { EventMarker } from "components/common/Event";

const useStyles = makeStyles((theme) => ({
  map: {
    height: "400px",
    width: "100%",
    margin: theme.spacing(5, 0, 10),
  },
}));
const Map = ({ data }) => {
  const classes = useStyles();
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={classes.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FeatureGroup>
        {data.length > 1 ? (
          data.map((person) => <EventMarker person={person} key={person.id} />)
        ) : (
          <EventMarker person={data} key={data.id} />
        )}
      </FeatureGroup>
    </MapContainer>
  );
};

export default Map;
