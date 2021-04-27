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

const PersonAlertList = () => {
  const classes = useStyles();
  const personAlertContext = useContext(PersonAlertContext);

  const { personAlerts, getPersonAlerts, loading } = personAlertContext;

  useEffect(() => {
    getPersonAlerts();
    // eslint-disable-next-line
  }, []);

  if (personAlerts !== null && personAlerts.length === 0 && !loading) {
    return <Typography variant="h6">There are no missing persons.</Typography>;
  }

  return (
    <div className={classes.container}>
      {personAlerts !== null && !loading ? (
        <Fragment>
          {personAlerts.map((personAlert) => (
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
