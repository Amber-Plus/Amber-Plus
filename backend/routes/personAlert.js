/* eslint-disable */
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const PersonAlert = require("../models/PersonAlert");

// @route     Get api/personAlert
// @desc      Get all missing persons
// @access    Public
router.get("/", async (req, res) => {
  try {
    const personAlerts = await PersonAlert.find().populate("personAlerts");
    res.json(personAlerts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     Get api/personAlert/me
// @desc      Get all missing persons from a user
// @access    Public
router.get("/me", auth, async (req, res) => {
  try {
    const personAlerts = await PersonAlert.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(personAlerts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     Get api/personAlert
// @desc      Get all missing persons
// @access    Public
router.get("/:id/:name", async (req, res) => {
  try {
    let personAlert = await PersonAlert.findById(req.params.id);

    if (!personAlert) return res.status(404).json({ msg: "Contact not found" });

    res.json(personAlert);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/personAlert
// @desc      Add missing person
// @access    Private
router.post(
  "/",
  auth,
  check("name", "Name is required").notEmpty(),
  check("age", "Wow thats old").isInt(),
  check("hair", "Hair is required").notEmpty(),
  check("height", "Height is required").notEmpty(),
  check("image").custom((value, { req }) => {
    console.log("value: " + value);

    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(value);
    // Check File Type
    if (!extname) {
      console.log("Error???");
      throw new Error("Error: Images Only!");
      // return Promise.reject('Error: Images Only!');
    }
    console.log("No error :)");
    return true;
  }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Somethings wrong :<");
      console.log(errors.array());
      return res.status(400).json({ error: errors.array() });
    }

    const {
      name,
      age,
      hair,
      height,
      eyes,
      location,
      position,
      status,
      details,
      image,
      vehicle,
    } = req.body;

    console.log("Image: " + image);

    try {
      let newPersonAlert = new PersonAlert({
        name,
        age,
        hair,
        height,
        eyes,
        location,
        position,
        status,
        details,
        image,
        vehicle,
        user: req.user.id,
      });

      const personAlert = await newPersonAlert.save();

      res.json(personAlert);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route     PUT api/personAlert/:id
// @desc      Update missing person
// @access    Private
router.put("/:id", auth, async (req, res) => {
  const {
    name,
    age,
    hair,
    height,
    eyes,
    location,
    position,
    status,
    details,
    image,
    vehicle,
  } = req.body;

  // Build contact object
  const personAlertFields = {};
  if (name) personAlertFields.name = name;
  if (age) personAlertFields.age = age;
  if (hair) personAlertFields.hair = hair;
  if (height) personAlertFields.height = height;
  if (eyes) personAlertFields.eyes = eyes;
  if (location) personAlertFields.location = location;
  if (position) personAlertFields.position = position;
  if (status) personAlertFields.status = status;
  if (details) personAlertFields.details = details;
  if (image) personAlertFields.image = image;
  if (vehicle) personAlertFields.vehicle = vehicle;

  try {
    let personAlert = await PersonAlert.findById(req.params.id);

    if (!personAlert)
      return res.status(404).json({ msg: "PersonAlert not found" });

    // Make sure user owns personAlert
    if (personAlert.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    personAlert = await PersonAlert.findByIdAndUpdate(
      req.params.id,
      { $set: personAlertFields },
      { new: true }
    );

    res.json(personAlert);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/personAlert
// @desc      Delete missing person
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let personAlert = await PersonAlert.findById(req.params.id);

    if (!personAlert) return res.status(404).json({ msg: "Contact not found" });

    // Make sure user owns contact
    if (personAlert.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await PersonAlert.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
