import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonAlertCard from "./PersonAlertCard";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
}));
export const PERSON_ALERT_URL = "/person-alert/:name/:key";

const PersonAlertList = ({ people }) => {
  const classes = useStyles();

  const handleShare = () => {
    //temporary
    console.log("share post");
  };

  const handleNavigation = (name, index) => {
    const nameParam = name.replace(" ", "-");
    return `/person-alert/${nameParam}/${index}`;
  };

  return (
    <div className={classes.container}>
      {people &&
        people.map((person, index) => (
          <PersonAlertCard
            person={person}
            key={index}
            pathTo={handleNavigation(person.name, index)}
            handleShare={handleShare}
          />
        ))}
    </div>
  );
};

export default PersonAlertList;
