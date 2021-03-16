import React from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { EventMarker } from "components/common/Event";
import { MAPBOX_CONFIG as config } from "./config/mapConfig";
import getMapCenter from "utils/getMapCenter";

const useStyles = makeStyles((theme) => ({
  map: {
    height: (isProfile) => (isProfile ? theme.spacing(50) : "85vh"),
    width: "100%",
    margin: (isProfile) =>
      isProfile ? theme.spacing(5, 0, 10) : theme.spacing(0, 0, 7),
  },
}));
const Map = ({ data, isProfile }) => {
  const classes = useStyles(isProfile);
  const center = getMapCenter(data);

  return (
    <MapContainer
      center={center}
      zoom={isProfile ? 15 : 12}
      scrollWheelZoom={false}
      className={classes.map}
    >
      <TileLayer attribution={config.attribution} url={config.url} />
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
