/* eslint-disable */
import React, { Fragment, useContext } from "react";
import PersonAlertContext from "../../context/personAlert/personAlertContext";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import getProfileObject from "utils/getProfileObject";
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
    display: "flex",
    flexDirection: (isMobile) => (isMobile ? "row" : "column"),
    width: 300,
    margin: theme.spacing(2, 3, 0),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: theme.spacing(2, 0.5, 0),
      padding: theme.spacing(1, 0.25),
    },
    "& .MuiCardActions-root": {
      justifyContent: (isMobile) => !isMobile && "flex-end",
      padding: 0,
    },
  },
  media: {
    width: "100%",
    height: "auto",
    maxHeight: 250,
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      borderRadius: "50%",
    },
  },
  title: {
    color: theme.palette.grey[500],
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(1.5),
    },
  },
  value: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(1.5),
    },
  },
  shareButton: {
    display: "flex",
    flexDirection: (isMobile) => (isMobile ? "center" : "flex-end"),
    marginRight: theme.spacing(0.5),
    marginTop: (isMobile) => (isMobile ? 0 : theme.spacing(2)),
  },
  shareIcon: {
    padding: 8,
  },
}));

const PersonAlertCard = ({ person, pathTo }) => {
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const personAlertContext = useContext(PersonAlertContext);
  const { deletePersonAlert, setCurrent, clearCurrent } = personAlertContext;

  const classes = useStyles(isMobile);
  const link = `${window.location.origin}${pathTo}`;

  const { _id, name, image } = person;

  const img = ("/uploads/" + image).replace(/ /g, "");

  const profile = getProfileObject(person, "card");

  const onDelete = () => {
    deletePersonAlert(_id);
    clearCurrent();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea component="a" href={pathTo}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction={isMobile ? "row" : "column"}
        >
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            md={12}
            sm={12}
            xs={4}
          >
            <img src={img} alt={name} className={classes.media} />
          </Grid>
          <Grid
            container
            item
            justify="space-between"
            md={9}
            sm={9}
            xs={7}
            style={{ marginTop: !isMobile && "12px" }}
          >
            {profile.map((data) => (
              <Fragment key={`${name}-${data.value}`}>
                <Grid item xs={4}>
                  <Typography className={classes.title}>
                    {data.title}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.value}>
                    {data.value}
                  </Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions className={classes.shareButton}>
        <Grid
          container
          direction={isMobile ? "column" : "row"}
          justify={isMobile ? "center" : "flex-end"}
        >
          <Grid item>
            <Button
              color="primary"
              onClick={() => setCurrent(person)}
            // href={"/create-post/${id}"}
            >
              Edit
            </Button>
          </Grid>
          <Grid item>
            <FacebookShareButton
              url={link}
              quote={`AmberPlus - Help us find ${person.name}`}
              hashtag="#AmberPlusAlert"
            >
              <FacebookIcon size={isMobile ? 20 : 36} />
            </FacebookShareButton>
          </Grid>
          <Grid item>
            <TwitterShareButton
              url={link}
              title={`AmberPlus - Help us find ${person.name}`}
              hashtag="#AmberPlusAlert"
            >
              <TwitterIcon size={isMobile ? 20 : 36} />
            </TwitterShareButton>
          </Grid>
          <Grid item>
            <EmailShareButton
              url={"help@amberplus.com"}
              title={`AmberPlus - Help us find ${person.name}`}
              separator=":: "
            >
              <EmailIcon size={isMobile ? 20 : 36} />
            </EmailShareButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PersonAlertCard;
