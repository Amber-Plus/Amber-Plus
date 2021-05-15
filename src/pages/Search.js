import React, { useEffect, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Map from "components/common/Map";
import PersonAlertContext from "context/personAlert/personAlertContext";

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
    fontSize: theme.spacing(2.5),
    textAlign: 'center'
  }
}));

const Search = () => {
  const classes = useStyles()
  const personAlertContext = useContext(PersonAlertContext);
  const { personAlerts, getPersonAlerts, loading } = personAlertContext;

  useEffect(() => {
    getPersonAlerts();
    // eslint-disable-next-line
  }, []);

  return (<>
    <div className={`${classes.container} ${classes.list}`}>
      {
        <Typography className={classes.description}>This is a map showing the geoloocation of active missing Person Alerts posted by members of this community. <br />The smaller the radius, the more recently the alert was possted.</Typography>
      }
    </div>
    {personAlerts !== null &&
      !loading && <Map data={personAlerts} isProfile={false} />}</>
  );
};

export default Search;
