import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button, Typography, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import CustomContainer from 'components/common/CustomContainer'
import homeImg from "constants/homeImage.png";
import { PAGE_ROUTES, MISSING } from "constants/pages";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5, 1, 1, 0),
    padding: "10px",
  },
  btnText: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 3)
  },
  title: {
    fontSize: theme.spacing(10),
    fontWeight: "bold",
    width: '100%'
  },
  img: {
    width: "100%",
    height: "90%"
  }
}));

const Home = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 780px)", {
    noSsr: true,
  });

  return <CustomContainer >
    <Grid container justify='center' alignItems='center' direction={isMobile ? 'column' : 'row'}>
      <Grid container item justify='center' direction='column' xs={12} sm={12} md={4} lg={4}>
        <Grid item xs={8}>
          <Typography className={classes.title}>Amber+</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>The platform that helps others help each other in order to find loved ones.</Typography>
        </Grid>

        <Grid item xs={8}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SearchIcon />}
            component='a'
            href={PAGE_ROUTES[MISSING]}
          >
            <span className={classes.btnText} >View Alerts</span>

          </Button>
        </Grid>
      </Grid>
      <Grid container item justify='center' alignItems='center' xs={12} sm={10} md={8} lg={8}>
        <img className={classes.img} src={homeImg} alt="homeImg" />
      </Grid>
    </Grid>
  </CustomContainer>;
};

export default Home;
