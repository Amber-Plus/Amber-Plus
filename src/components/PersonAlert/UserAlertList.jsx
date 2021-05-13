import React, { Fragment, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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

const UserAlertList = () => {
  const classes = useStyles();
  const personAlertContext = useContext(PersonAlertContext);

  const { personAlerts, getUserAlerts, loading } = personAlertContext;

  useEffect(() => {
    getUserAlerts();
    // eslint-disable-next-line
  }, []);

  if (personAlerts !== null && personAlerts.length === 0 && !loading) {
    return (
      <div className={classes.container}>
        <Typography variant="h6">
          You have not reported a person alert.
        </Typography>
      </div>
    );
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
              type="onProfile"
            />
          ))}
        </Fragment>
      ) : (
        <Typography variant="h6">Loading...</Typography>
      )}
    </div>
  );
};

export default UserAlertList;
