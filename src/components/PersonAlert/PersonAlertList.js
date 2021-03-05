import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonCard from "./PersonAlertCard";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
}));

const PersonList = ({ people }) => {
  const classes = useStyles();

  const handleShare = () => {
    //temporary
    console.log("share post");
  };

  const handleClick = () => {
    //temporary
    console.log(`post was clicked`);
  };

  return (
    <div className={classes.container}>
      {people &&
        people.map((person, index) => (
          <PersonCard
            person={person}
            handleShare={handleShare}
            handleClick={() => handleClick(person.name, index)}
          />
        ))}
    </div>
  );
};

export default PersonList;
