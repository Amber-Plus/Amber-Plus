import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { EventMarker } from "components/common/Event";
import { MAPBOX_CONFIG as config } from "./config/mapConfig";
import PersonAlertContext from "context/personAlert/personAlertContext";
import getMapCenter from "utils/getMapCenter";
import getLatLng from "utils/getLatLng";

const useStyles = makeStyles((theme) => ({
  map: {
    height: (isProfile) => (isProfile ? theme.spacing(50) : "85vh"),
    width: "100%",
    margin: (isProfile) =>
      isProfile ? theme.spacing(5, 0, 10) : theme.spacing(0, 0, 7),
  },
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(8),
  },
}));

const Map = ({ data, position, isProfile }) => {
  const classes = useStyles(isProfile);
  const personAlertContext = useContext(PersonAlertContext);
  const { personAlerts, getPersonAlerts, loading } = personAlertContext;
  const [posMap, setPosMap] = useState([]);

  useEffect(() => {
    !isProfile && getPersonAlerts();
    // eslint-disable-next-line
  }, []);

  //if not profile (so multi person alerts), then create a map of latlng positions
  useEffect(() => {
    async function getPosMap() {
      const result = [];
      await Promise.all(
        data.map(async (person) =>
          result.push(await getLatLng(person.location))
        )
      );
      setPosMap(result);
    }
    data.length > 1 && getPosMap();
  }, [data]);
  //gets map center for Search page otherwise use Position prop
  const center = !isProfile && posMap.length !== 0 && getMapCenter(posMap);

  return (
    <>
      {(personAlerts !== null && !loading && center && center.length !== 0) ||
        position ? (
          <MapContainer
            center={isProfile ? position : center}
            zoom={isProfile ? 15 : 12.45}
            scrollWheelZoom={false}
            className={classes.map}
          >
            <TileLayer attribution={config.attribution} url={config.url} />
            <FeatureGroup>
              {data.length > 1 ? (
                data.filter((person) =>
                  person.status === 'Missing'
                ).map((person) => (
                  <EventMarker
                    person={person}
                    position={false}
                    isProfile={isProfile}
                    key={person._id}
                  />
                ))
              ) : (
                  <EventMarker
                    person={data}
                    position={position}
                    isProfile={isProfile}
                    key={data._id}
                  />
                )}
            </FeatureGroup>
          </MapContainer>
        ) : (
          <div className={classes.container}>
            <Typography variant="h6"> Loading... </Typography>{" "}
          </div>
        )}
    </>
  );
};

export default Map;
