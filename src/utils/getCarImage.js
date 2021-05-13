import axios from "axios";

const key = process.env.REACT_APP_CARIMAGERY_KEY;

export const getCarImage = async (car) => {
  const resourceURL = `http://api.carsxe.com/images?key=${key}&year=${car.year}&make=${car.make}&model=${car.model}&color=${car.color}&angle=front&format=json`;

  const config = {
    method: "get",
    url: resourceURL,
  };

  return await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getCarImage;
