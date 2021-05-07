import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { EventMarker } from "components/common/Event";
import { MAPBOX_CONFIG as config } from "./config/mapConfig";
import getMapCenter from "utils/getMapCenter";
import getLatLng from "utils/getLatLng";

const useStyles = makeStyles((theme) => ({
  map: {
    height: (isProfile) => (isProfile ? theme.spacing(50) : "85vh"),
    width: "100%",
    margin: (isProfile) =>
      isProfile ? theme.spacing(5, 0, 10) : theme.spacing(0, 0, 7),
  },
}));

const Map = ({ data, position, isProfile }) => {
  const classes = useStyles(isProfile);
  const [posMap, setPosMap] = useState([]);

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

  const center = !isProfile && posMap.length !== 0 && getMapCenter(posMap);

  const centerPos = center ? center : { lat: 40.7753824, lng: -73.9664726 };

  console.log("x", centerPos);
  return (
    <MapContainer
      //center={isProfile ? position : centerPos}
      center={position}
      zoom={isProfile ? 15 : 13}
      scrollWheelZoom={false}
      className={classes.map}
    >
      <TileLayer attribution={config.attribution} url={config.url} />
      <FeatureGroup>
        {data.length > 1 ? (
          data.map((person) => (
            <EventMarker
              person={person}
              position={position}
              isProfile={isProfile}
              key={person.id}
            />
          ))
        ) : (
          <EventMarker
            person={data}
            position={position}
            isProfile={isProfile}
            key={data.id}
          />
        )}
      </FeatureGroup>
    </MapContainer>
  );
};

export default Map;
