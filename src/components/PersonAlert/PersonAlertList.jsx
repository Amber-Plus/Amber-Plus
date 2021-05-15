import React, { useContext, useEffect } from "react";
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
    paddingBottom: theme.spacing(8),
  },
  list: {
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    borderBottom: `${theme.spacing(0.2)}px solid ${theme.palette.grey[300]}`
  },
  description: {
    fontSize: theme.spacing(2.5)
  }
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
      <div className={`${classes.container} ${classes.list}`}>
        {
          status === 'Missing' ? <Typography className={classes.description}>This is a list of active missing Person Alerts posted by members of this community.</Typography> : <Typography className={classes.description}>This is a list of known Person Alerts that have been found!</Typography>
        }
      </div>
      {personAlerts !== null && !loading ? (
        <>

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
        </>
      ) : (
          <Typography variant="h6">Loading...</Typography>
        )}
    </div>
  );
};

export default PersonAlertList;
