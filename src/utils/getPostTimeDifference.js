import moment from "moment";

const getPostTimeDifference = (person) => {
  const currentTime = moment().format();
  const postTime = moment(person.data).format();

  const timeDifference = moment(currentTime).diff(moment(postTime), "hours");

  return timeDifference;
};

export default getPostTimeDifference;
