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

const PersonAlertList = ({ people, status }) => {
  const classes = useStyles();

  const handleShare = () => {
    //temporary
    console.log(" post");
  };

  const handleNavigation = (name, index) => {
    const nameParam = name.replace(/ /g, "-");
    return `/person-alert/${index}/${nameParam}`;
  };

  return (
    <div className={classes.container}>
      {people &&
        people
          .filter((person) => person.status === status)
          .map((person) => (
            <PersonAlertCard
              person={person}
              key={person.id}
              pathTo={handleNavigation(person.name, person.id)}
              handleShare={handleShare}
            />
          ))}
    </div>
  );
};

export default PersonAlertList;
