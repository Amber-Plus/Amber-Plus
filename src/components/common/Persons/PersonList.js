import React from "react";
import PersonCard from "./PersonCard";
import { makeStyles } from "@material-ui/core/styles";

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
    console.log("post was clicked");
  };

  return (
    <div className={classes.container}>
      {people &&
        people.map((person, index) => (
          <PersonCard
            name={person.name}
            age={person.age}
            details={person.details}
            handleShare={handleShare}
            handleClick={handleClick}
            key={`${person.name}-${index}`}
          />
        ))}
    </div>
  );
};

export default PersonList;
