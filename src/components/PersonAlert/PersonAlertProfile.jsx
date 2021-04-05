import React from "react";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import CustomContainer from "components/common/CustomContainer";
import Map from "components/common/Map";
import getProfileObject from "utils/getProfileObject";
import getVehicleString from "utils/getVehicleString";
import { testPeopleData } from "components/PersonAlert/testPeopleData";
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
  img: {
    width: "100%",
    maxWidth: theme.spacing(65),
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100vw",
      width: "100vw",
      margin: theme.spacing(0, -3),
    },
  },
  infoContainer: {
    height: "100%",
  },
}));

//this is profile page of an "amber alert" person. not a user profile.
const PersonAlertProfile = (props) => {
  const classes = useStyles();
  const { name, key } = useParams();
  const link = window.location.href;
  const originalName = name.replace(/-/g, " ");
  const person = testPeopleData.find(
    ({ name, id }) => name === originalName && id.toString() === key
  );
  console.log(link);
  const profile = getProfileObject(person, "profile");
  const car = !isEmpty(person.vehicle) && person.vehicle;
  const carString = getVehicleString(car);

  return (
    <CustomContainer className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item sm={5} xs={12} className={classes.imgContainer}>
          <img src={person.image} alt={person.name} className={classes.img} />
        </Grid>
        <Grid container item sm={7} xs={12} className={classes.infoContainer}>
          <Grid container item sm={12} xs={12}>
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
              xs={6}
              className={classes.root}
            >
              <Grid container item justify="center" sm={3} xs={2}>
                <FacebookShareButton
                  url={link}
                  quote={`AmberPlus - Help us find ${person.name}`}
                  hashtag="#AmberPlusAlert"
                >
                  <FacebookIcon size={36} />
                </FacebookShareButton>
              </Grid>
              <Grid container item justify="center" sm={3} xs={2}>
                <TwitterShareButton
                  url={link}
                  title={`AmberPlus - Help us find ${person.name}`}
                  hashtag="#AmberPlusAlert"
                >
                  <TwitterIcon size={36} />
                </TwitterShareButton>
              </Grid>
              <Grid container item justify="center" sm={3} xs={2}>
                <EmailShareButton
                  url={"help@amberplus.com"}
                  title={`AmberPlus - Help us find ${person.name}`}
                  separator=":: "
                >
                  <EmailIcon size={36} />
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
          <Grid item sm={car ? 6 : 12} xs={car ? 6 : 12}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Details
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography>{person.details}</Typography>
            </Grid>
          </Grid>
          {car && (
            <Grid item sm={5} xs={5}>
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Suspect Vehicle
                </Typography>
              </Grid>
              <Grid container item justify="center">
                <Typography>{carString}</Typography>
                <img
                  src={person.vehicle.image}
                  alt={carString}
                  className={classes.img}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Map data={person} isProfile={true} />
    </CustomContainer>
  );
};

export default PersonAlertProfile;
