import React from "react";
import homeImg from "images/home.png";
import { Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
//import { Typography } from '@material-ui/core';
//import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";


console.log(homeImg);
const Home = () => {

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();


  return <>
    
   
    <div style={{float:"left"}}>
    <div style={{marginTop:"20%",float:"left",width:"100%",height:"45%",fontSize:"100px",color:"red"}}>
    
      AMBER+
    
    </div>
   
    <div>
    
    
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SearchIcon />}
      >
        View Alerts
        </Button>
    </div>
    </div>
   
    <img style={{color:"white",background:"wide", float: "right",width:"50%"}} src={homeImg} alt = "homeImg"/>
    
    </>;
};

export default Home;
