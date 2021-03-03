import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  IconButton,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

//temporary image
import temp from "images/temp.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: (isMobile) => (isMobile ? "row" : "column"),
    width: 300,
    margin: theme.spacing(2, 3, 0),
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
    "& .MuiCardActions-root": {
      justifyContent: (isMobile) => !isMobile && "flex-end",
      padding: 0,
    },
  },
  media: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      borderRadius: "50%",
    },
  },
  title: {
    color: theme.palette.grey[500],
  },
  shareButton: {
    display: "flex",
    flexDirection: (isMobile) => (isMobile ? "center" : "flex-end"),
  },
  shareIcon: {
    padding: 8,
  },
}));

const PersonCard = ({
  name = "N/A",
  age = "N/A",
  details = "N/A",
  handleShare,
  handleClick,
}) => {
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const classes = useStyles(isMobile);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
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
            <img src={temp} alt={name} className={classes.media} />
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
            <Grid item xs={4}>
              <Typography className={classes.title}>Name: </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>{name}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.title}>Age: </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>{age}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.title}>
              <Typography>Details: </Typography>
            </Grid>
            <Grid item md={7} sm={7} xs={12}>
              <Typography>{details}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions className={classes.shareButton}>
        <IconButton
          aria-label="share"
          onClick={handleShare}
          className={classes.shareIcon}
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PersonCard;
