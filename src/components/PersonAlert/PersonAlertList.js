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

const PersonAlertList = ({ people }) => {
  const classes = useStyles();

  const handleShare = () => {
    //temporary
    console.log("share post");
  };

  const handleNavigation = (name, index) => {
    const nameParam = name.replace(/ /g, "-");
    return `/person-alert/${index}/${nameParam}`;
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
