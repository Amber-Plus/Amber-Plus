import React, { Fragment, useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PersonAlertCard from "./PersonAlertCard";
import handleNavigation from "utils/handleNavigation";
import PersonAlertContext from "../../context/personAlert/personAlertContext";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const PersonAlertList = ({ status }) => {
  const classes = useStyles();
  const personAlertContext = useContext(PersonAlertContext);
  let people;
  const { personAlerts, getPersonAlerts, loading } = personAlertContext;

  useEffect(() => {
    getPersonAlerts();
    // eslint-disable-next-line
  }, []);

  if (personAlerts !== null && !loading) {
    people = personAlerts.filter((person) =>
      status ? person.status === status : person
    );
  }
  console.log(personAlerts);

  if (personAlerts !== null && people.length === 0 && !loading) {
    return (
      <div className={classes.container}>
        {status === "Missing" ? (
          <Typography variant="h6">
            There are no alerts of missing persons.
          </Typography>
        ) : (
          <Typography variant="h6">
            There are no alerts of people found.
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {personAlerts !== null && !loading ? (
        <Fragment>
          {people &&
            people.map((personAlert) => (
              <PersonAlertCard
                person={personAlert}
                key={personAlert._id}
                pathTo={handleNavigation(
                  "person-alert",
                  personAlert.name,
                  personAlert._id
                )}
              />
            ))}
        </Fragment>
      ) : (
        <Typography variant="h6">Loading...</Typography>
      )}
    </div>
  );
};

export default PersonAlertList;
