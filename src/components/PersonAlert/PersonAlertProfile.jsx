/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CustomContainer from "components/common/CustomContainer";
import Map from "components/common/Map";
import getProfileObject from "utils/getProfileObject";
import getVehicleString from "utils/getVehicleString";
import getLatLng from "utils/getLatLng";
import getCarImage from "utils/getCarImage";
import PersonAlertContext from "context/personAlert/personAlertContext";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiIconButton-root": {
      padding: theme.spacing(1.5),
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(0.25),
      },
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  dataTitle: {
    width: "auto",
    minWidth: theme.spacing(9),
    fontWeight: "bold",
    color: theme.palette.primary.main,
    float: "left",
    margin: theme.spacing(0, 3, 0.5, 0),
  },
  dataValue: {
    width: "auto",
  },
  carImg: {
    width: "70%",
    height: "100%",
    objectFit: "contain",
  },
  img: {
    width: "100%",
    height: "100%",
    maxWidth: theme.spacing(65),
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100vw",
      width: "100vw",
      margin: theme.spacing(0, -3),
    },
  },
  imgContainer: {
    width: "100%",
    maxHeight: theme.spacing(62),
  },
  infoContainer: {
    height: "100%",
  },
}));

//this is profile page of an "amber alert" person. not a user profile.
const PersonAlertProfile = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const personAlertContext = useContext(PersonAlertContext);
  const { name, key } = useParams();
  const link = window.location.href;
  const id = key;
  const [position, setPosition] = useState();
  const [carImg, setCarImg] = useState();

  const {
    personAlerts,
    // filtered,
    getPersonAlert,
    loading,
  } = personAlertContext;

  useEffect(() => {
    getPersonAlert(id, name);
    // eslint-disable-next-line
  }, []);

  const person = personAlerts;

  useEffect(() => {
    async function getPosition() {
      person && setPosition(await getLatLng(person.location));
    }
    getPosition();
  }, [person]);

  // profile, car, and carString vars create errors if not null checked prior
  let profile;
  let car;
  let carString;
  if (personAlerts !== null && personAlerts.length !== 0) {
    //set profile object for Information section
    profile = getProfileObject(person, "profile");
    //set car value if vehicle exists
    car =
      !isEmpty(person.vehicle) && person.vehicle.make !== "" && person.vehicle;
    //if car exists, then create Vehicle title string
    carString = car
      ? getVehicleString(car)
      : "No suspect vehicle known at this time";
  }

  useEffect(() => {
    async function getCarImg() {
      person && setCarImg(await getCarImage(person.vehicle));
    }
    person && getCarImg();
  }, [person]);

  return (
    <CustomContainer className={classes.root}>
      {personAlerts !== null && !loading ? (
        <Grid container spacing={3} style={{ marginBottom: '50px' }}>
          <Grid container item sm={5} xs={12} className={classes.imgContainer}>
            <img
              src={`/uploads/${person.image}`}
              alt={person.name}
              className={classes.img}
            />
          </Grid>
          <Grid container item sm={7} xs={12} className={classes.infoContainer}>
            <Grid container item justify="space-between" sm={12} xs={12}>
              <Grid item xs={6}>
                <Typography variant="h6" className={classes.title}>
                  Information
                </Typography>
              </Grid>
              <Grid
                container
                item
                justify="flex-end"
                alignItems="flex-start"
                md={4}
                sm={6}
                xs={6}
                className={classes.root}
              >
                <Grid container item justify="center" sm={3} xs={4}>
                  <TwitterShareButton
                    url={link}
                    title={`AmberPlus - Help us find ${person.name}`}
                    hashtags={['AmberPlusAlert', `Find${person.name.replace(/ /g, "")}`]}
                  >
                    <TwitterIcon size={isMobile ? 20 : 36} />
                  </TwitterShareButton>
                </Grid>
                <Grid container item justify="center" sm={3} xs={4}>
                  <EmailShareButton
                    subject={`AmberPlus - Help us find ${person.name}`}
                    body={`The whereabout of ${person.name} is currently unknown. See more information about ${person.name} with the following link:`}
                    url={link}
                  >
                    <EmailIcon size={isMobile ? 20 : 36} />
                  </EmailShareButton>
                </Grid>
              </Grid>
            </Grid>
            {profile.map((data) => (
              <Grid item sm={12} xs={12} key={data.value}>
                <Typography className={classes.dataTitle}>
                  {data.title}
                </Typography>
                <Typography className={classes.dataValue}>
                  {data.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            item
            justify="space-between"
            className={classes.details}
          >
            {person.details && (
              <Grid
                item
                sm={6}
                xs={12}
                style={{ marginBottom: isMobile && "24px" }}
              >
                <Grid item>
                  <Typography variant="h6" className={classes.title}>
                    Details
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography>{person.details}</Typography>
                </Grid>
              </Grid>
            )}

            <Grid container item sm={person.details ? 5 : 12} xs={12}>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Suspect Vehicle
                </Typography>
              </Grid>
              <Grid
                container
                item
                justify={person.details ? "center" : "flex-start"}
              >

                {car && carImg ? (
                  <>
                    <Typography>{carString}</Typography>
                    <img
                      src={carImg && carImg}
                      alt={carString}
                      className={classes.carImg}
                    />
                  </>
                ) : <Typography >Loading...</Typography>}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
          <Typography variant="h6">Loading...</Typography>
        )}
      {personAlerts !== null && !loading && position && (
        <Map data={person} position={position} isProfile={true} />
      )}
    </CustomContainer>
  );
};

export default PersonAlertProfile;
