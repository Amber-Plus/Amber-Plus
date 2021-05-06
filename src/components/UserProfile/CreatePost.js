import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  Input,
} from "@material-ui/core";
import CustomContainer from "components/common/CustomContainer";
import PersonAlertContext from "../../context/personAlert/personAlertContext";
import AuthContext from "context/auth/authContext";
import handleNavigation from "utils/handleNavigation";

const crypto = require("crypto");

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
  const personAlertContext = useContext(PersonAlertContext);
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [post, setPost] = useState({
    name: "",
    age: "",
    hair: "",
    eyes: "",
    height: "",
    details: "",
    image: "",
    location: {
      line1: "",
      city: "",
      state: "",
      zipcode: "",
    },
    vehicle: {
      make: "",
      model: "",
      year: "",
      color: "",
    },
  });

  const {
    addPersonAlert,
    updatePersonAlert,
    clearCurrent,
    current,
  } = personAlertContext;

  const {
    name,
    age,
    hair,
    eyes,
    height,
    details,
    image,
    location,
    vehicle,
  } = post;

  const handleChange = (field, value, type) => {
    if (type === "location") {
      setPost({ ...post, location: { ...location, [field]: value } });
    } else if (type === "vehicle") {
      setPost({ ...post, vehicle: { ...vehicle, [field]: value } });
    } else {
      setPost({ ...post, [field]: value });
    }
  };

  const onFileChange = (e) => {
    try {
      setFile(e.target.files[0]);

      const buf = crypto.randomBytes(16);
      const fileName =
        buf.toString("hex") + e.target.files[0].name.replace(/ /g, "_");
      setFilename(fileName);
      setPost({ ...post, image: fileName });
    } catch (err) {
      console.error(err);
    }
  };

  const onNameChange = (type, value) => {
    if (type === "first") {
      setFName(value);
    } else if (type === "last") {
      setLName(value);
    }
    setPost({ ...post, name: `${fName} ${lName}` });
  };

  useEffect(() => {
    if (name !== `${fName} ${lName}`) {
      fName && lName && setPost({ ...post, name: `${fName} ${lName}` });
    }
  }, [fName, lName, name, post]);

  const onSubmit = () => {
    // e.preventDefault();
    setPost({ ...post, name: `${fName} ${lName}` });
    if (name === "" || age === "" || hair === "" || image === "") {
      console.log("Please enter all fields", "danger");
    } else if (current === null) {
      addPersonAlert(post);
      uploadImage();
      clearAll();
    } else {
      updatePersonAlert(post);
      uploadImage();
      clearAll();
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file, filename);
    // console.log(filename);

    try {
      await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        proxy: {
          host: "localhost",
          port: 5000,
        },
      });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const clearAll = () => {
    setFName("");
    setLName("");

    setPost({
      name: "",
      age: "",
      hair: "",
      eyes: "",
      height: "",
      details: "",
      image: "",
      location: {
        line1: "",
        city: "",
        state: "",
        zipcode: "",
      },
      vehicle: {
        make: "",
        model: "",
        year: "",
        color: "",
      },
    });

    setFile("");
    setFilename("");

    clearCurrent();
  };

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
                  value={fName}
                  onChange={(e) => onNameChange("first", e.target.value)}
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
                  value={lName}
                  onChange={(e) => onNameChange("last", e.target.value)}
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
                  value={age}
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
                  value={hair}
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
                  value={eyes}
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
                  value={height}
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
                  value={details}
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
                  value={location.line1}
                  onChange={(e) =>
                    handleChange("line1", e.target.value, "location")
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
                  value={location.city}
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
                  value={location.state}
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
                  value={location.zipcode}
                  onChange={(e) =>
                    handleChange("zipcode", e.target.value, "location")
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
                  value={vehicle.make}
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
                  value={vehicle.model}
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
                  value={vehicle.year}
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
                  value={vehicle.color}
                  onChange={(e) =>
                    handleChange("color", e.target.value, "vehicle")
                  }
                  fullWidth
                  className={classes.inputField}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="space-between">
              <Grid item xs={12}>
                <Typography variant="h5" className={classes.title}>
                  Picture:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Input
                  id="image"
                  lable="Image"
                  type="file"
                  onChange={onFileChange}
                  onClick={(e) => {
                    e.target.value = null;
                  }}
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
                component="a"
                href={
                  isAuthenticated &&
                  handleNavigation("profile", user.name, user._id)
                }
                onClick={() => onSubmit()}
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
