export const getLocationString = (address) => {
  const { line1, line2, city, state, zipcode } = address;
  const location = [line1, line2, city, state, zipcode]
    .filter((val) => val !== "")
    .join(", ");

  return location;
};

export default getLocationString;
