import React, { Fragment, useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import PersonAlertCard from "./PersonAlertCard";
import handleNavigation from "utils/handleNavigation";
import PersonAlertContext from '../../context/personAlert/personAlertContext';

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

  const { personAlerts, filtered, getUserAlerts, loading } = personAlertContext;

  useEffect(() => {
    getUserAlerts();
    // eslint-disable-next-line
  }, []);

  console.log("person alerts: ", personAlerts);

  if (personAlerts !== null && personAlerts.length === 0 && !loading) {
    return (
      <div className={classes.container}>
        <h2>You have not reported a missing person.</h2>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      {personAlerts !== null && !loading ? (
        <Fragment>
          {personAlerts.map(personAlert => (
            <PersonAlertCard
              person={personAlert}
              key={personAlert._id}
              pathTo={handleNavigation("person-alert", personAlert.name, personAlert._id)}
            />
          ))}
        </Fragment>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default UserAlertList;
