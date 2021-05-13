import axios from "axios";

const key = process.env.REACT_APP_CARIMAGERY_KEY;

export const getCarImage = async (car) => {
  const resourceURL = `http://api.carsxe.com/images?key=${key}&year=${car.year}&make=${car.make}&model=${car.model}&color=${car.color}&angle=front&format=json`;

  const config = {
    method: "get",
    url: resourceURL,
  };

  return await axios(config)
    .then(response => response.data.images[0].link)

};

export default getCarImage;
