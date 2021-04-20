import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, TextField, Paper } from "@material-ui/core";
import CustomContainer from "components/common/CustomContainer";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    fontSize: theme.spacing(2.5),
  },
  input: {
    margin: theme.spacing(0, 1),
  },
  submit: {
    marginTop: theme.spacing(4),
  },
}));

const CreatePost = () => {
  const classes = useStyles();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [post, setPost] = useState({
    name: "",
    age: "",
    hair: "",
    eyes: "",
    height: "",
    details: "",
    location: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    vehicle: {
      make: "",
      model: "",
      year: "",
      color: "",
    },
  });

  const handleChange = (field, value, type) => {
    if (type === "location") {
      setPost({ ...post, location: { ...post.location, [field]: value } });
    } else if (type === "vehicle") {
      setPost({ ...post, vehicle: { ...post.vehicle, [field]: value } });
    } else {
      setPost({ ...post, [field]: value });
    }
  };

  useEffect(() => {
    fName && lName && setPost({ ...post, name: `${fName} ${lName}` });
  }, [fName, lName, post]);

  return (
    <CustomContainer>
      <Paper elevation={10} className={classes.paperStyle}>
        <CustomContainer>
          <Grid container>
            <Grid container item justify="center" xs={12}>
              <Typography
                variant="h6"
                className={classes.title}
                style={{ fontSize: "26px" }}
              >
                Create New Person Alert
              </Typography>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.title}>
                  {" "}
                  General Information:
                </Typography>
              </Grid>

              <Grid item xs={4} className={classes.input}>
                <TextField
                  id="firstName"
                  label="First Name"
                  placeholder="Enter first name"
                  onChange={(e) => setFName(e.target.value)}
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  placeholder="Enter last name"
                  onChange={(e) => setLName(e.target.value)}
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="age"
                  label="Age"
                  placeholder="Enter age"
                  onChange={(e) => handleChange("age", e.target.value)}
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.title}>
                  Description:
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  id="hair"
                  label="Hair Color"
                  placeholder="Enter hair color"
                  onChange={(e) => handleChange("hair", e.target.value)}
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="eyes"
                  label="Eye Color"
                  placeholder="Enter eye color"
                  onChange={(e) => handleChange("eyes", e.target.value)}
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="height"
                  label="Height"
                  placeholder="Enter height"
                  onChange={(e) => handleChange("height", e.target.value)}
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="details"
                  label="Extra Details"
                  placeholder="Enter extra details"
                  onChange={(e) => handleChange("details", e.target.value)}
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
            </Grid>

            <Grid container item xs={12} justify="space-between">
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.title}>
                  {" "}
                  Last Seen Location:
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="street"
                  label="Street"
                  placeholder="Enter street address"
                  onChange={(e) =>
                    handleChange("street", e.target.value, "location")
                  }
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="city"
                  label="City"
                  placeholder="Enter city"
                  onChange={(e) =>
                    handleChange("city", e.target.value, "location")
                  }
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="state"
                  label="State"
                  placeholder="Enter state"
                  onChange={(e) =>
                    handleChange("state", e.target.value, "location")
                  }
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="zipcode"
                  label="Zip Code"
                  placeholder="Enter zip code"
                  onChange={(e) =>
                    handleChange("zip", e.target.value, "location")
                  }
                  fullWidth
                  required
                  className={classes.inputField}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.title}>
                  Suspect Vehicle:
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="make"
                  label="Make"
                  placeholder="Enter car make"
                  onChange={(e) =>
                    handleChange("make", e.target.value, "vehicle")
                  }
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="model"
                  label="Model"
                  placeholder="Enter car model"
                  onChange={(e) =>
                    handleChange("model", e.target.value, "vehicle")
                  }
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="year"
                  label="Year"
                  placeholder="Enter car year"
                  onChange={(e) =>
                    handleChange("year", e.target.value, "vehicle")
                  }
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="color"
                  label="Color"
                  placeholder="Enter car color"
                  onChange={(e) =>
                    handleChange("color", e.target.value, "vehicle")
                  }
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              justify="center"
              style={{ marginBottom: "24px" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit Post
              </Button>
            </Grid>
          </Grid>
        </CustomContainer>
      </Paper>
    </CustomContainer>
  );
};

export default CreatePost;
