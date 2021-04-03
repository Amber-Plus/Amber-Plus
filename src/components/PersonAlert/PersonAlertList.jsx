import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonAlertCard from "./PersonAlertCard";
import handleNavigation from "utils/handleNavigation";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const PersonAlertList = ({ people, status }) => {
  const classes = useStyles();

  const handleShare = () => {
    //temporary
    console.log("share post");
  };

  return (
    <div className={classes.container}>
      {people &&
        people
          .filter((person) => (status ? person.status === status : person))
          .map((person) => (
            <PersonAlertCard
              person={person}
              key={person.id}
              pathTo={handleNavigation("person-alert", person.name, person.id)}
              handleShare={handleShare}
            />
          ))}
    </div>
  );
};

export default PersonAlertList;
