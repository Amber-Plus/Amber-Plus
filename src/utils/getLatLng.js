import axios from "axios";
import getLocationString from "./getLocationString";

const key = process.env.REACT_APP_MAPQUEST_KEY;

export const getLatLng = async (address) => {
  const location = getLocationString(address)
    .replace(/ /g, "+")
    .replace(/,/g, "%2C");
  const resourceURL = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&inFormat=kvp&outFormat=json&location=${location}&thumbMaps=false`;

  const config = {
    method: "get",
    url: resourceURL,
  };

  return await axios(config).then(
    (response) => response.data.results[0].locations[0].latLng
  );
};

export default getLatLng;
