/* eslint-disable */
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Typography, Button } from "@material-ui/core";
import CustomContainer from "components/common/CustomContainer";
import UserAlertList from "components/PersonAlert/UserAlertList";
import AuthContext from "context/auth/authContext";

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
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  listContainer: {
    display: "flex",
    justifyContent: "center ",
  },
  postBtn: {
    marginTop: theme.spacing(4),
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const { name, key } = useParams();

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
              {user && user.image ? (
                <img src={user.image} alt={user.name} className={classes.img} />
              ) : (
                  <img
                    src={`/uploads/defaultImg.png`}
                    alt={user ? user.name : name}
                    className={classes.img}
                  />
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
                {user && user.name}
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
              <Typography>{user && user.email}</Typography>
            </Grid>
            {isAuthenticated && (
              <Grid
                container
                item
                alignItems={isMobile ? "center" : "flex-start"}
                direction="column"
                sm={12}
                xs={12}
              >
                <Button
                  component="a"
                  href={"/create-post"}
                  variant="contained"
                  color="primary"
                  className={classes.postBtn}
                >
                  Create New Post
                </Button>
              </Grid>
            )}
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
          <UserAlertList />
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default UserProfile;
