import { startCase } from "lodash";

export const getVehicleString = (vehicle) => {
  const { make, model, year, color } = vehicle;
  const car = startCase(`${color} ${make} ${model} ${year}`);

  return car;
};

export default getVehicleString;
