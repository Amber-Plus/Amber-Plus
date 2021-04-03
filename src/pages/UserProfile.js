import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Typography } from "@material-ui/core";
import CustomContainer from "components/common/CustomContainer";
import PersonAlertList from "components/PersonAlert/PersonAlertList";
import { testUserData } from "components/PersonAlert/testUserData";
import { testPeopleData } from "components/PersonAlert/testPeopleData";
import defaultImg from "images/defaultImg.png";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(7),
  },
  leftContainer: {
    left: 0,
    height: "100%",
  },
  rightContainer: {
    right: 0,
    height: "100%",
  },
  imgContainer: {
    height: "100%",
    marginBottom: theme.spacing(4),
  },
  img: {
    width: "100%",
    maxWidth: theme.spacing(25),
    borderRadius: "50%",
  },
  imgDefault: {},
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  listContainer: {
    display: "flex",
    justifyContent: "center ",
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const { name, key } = useParams();
  const originalName = name.replace(/-/g, " ");
  const user = testUserData.find(
    ({ name, id }) => name.toLowerCase() === originalName && id === key
  );
  const posts = user.posts.map((post) =>
    testPeopleData.find((person) => post === person.id)
  );

  return (
    <CustomContainer>
      <Grid
        container
        direction={isMobile ? "column" : "row"}
        className={classes.container}
      >
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          md={4}
          sm={5}
          xs={12}
          className={classes.leftContainer}
          style={{ marginBottom: isMobile && 40 }}
        >
          <div>
            <Grid
              container
              item
              alignItems="center"
              justify="center"
              sm={12}
              xs={12}
              className={classes.imgContainer}
            >
              {user.image ? (
                <img src={user.image} alt={user.name} className={classes.img} />
              ) : (
                <img src={defaultImg} alt={user.name} className={classes.img} />
              )}
            </Grid>
            <Grid
              container
              item
              justify={isMobile ? "center" : "flex-start"}
              sm={12}
              xs={12}
            >
              <Typography
                variant="h6"
                className={classes.title}
                style={{ color: "black" }}
              >
                {user.name}
              </Typography>
            </Grid>
            <Grid
              container
              item
              alignItems={isMobile ? "center" : "flex-start"}
              direction="column"
              sm={12}
              xs={12}
            >
              <Typography className={classes.title} style={{ marginBottom: 0 }}>
                Contact
              </Typography>
              <Typography>{user.email}</Typography>
            </Grid>
          </div>
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          md={8}
          sm={7}
          xs={12}
          className={classes.RightContainer}
        >
          <Typography variant="h6" className={classes.title}>
            Posts
          </Typography>
          <PersonAlertList people={posts} />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default UserProfile;
