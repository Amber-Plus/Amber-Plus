import React from "react";
import homeImg from "images/homeImage.png";
import { Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import "./homepage.css";
//import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";


console.log(homeImg);
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: "10px",
    alignItem: "center"
  },
  title: {
    fontWeight:"bold",alignItem:"center", marginBottom:"150px", position: "center", justifyContent: "center", justify: "center"
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  Grid: {
  container: "row",
  justify: "center",
  }
}));


const Home = () => {

  const classes = useStyles();

  return <>
    
   <div className={classes.center}>
    <div class="grid-container">
  <div class="A"> <Typography variant="h1" className={classes.title}>AMBER+</Typography>
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        View Alerts
        </Button>
  </div>
  <div class="B">
  <img style={{ color:"white",background:"wide", width:"80%",height: "100%"}} src={homeImg} alt = "homeImg"/>
    
  </div>
</div>
    </div>
    </>;
};

export default Home;
