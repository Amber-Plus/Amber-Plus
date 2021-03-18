const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const PersonAlert = require('../models/PersonAlert');

// @route     Get api/personAlert
// @desc      Get all missing person
// @access    Public
router.get('/', (req, res) => {
    res.send('See all Missing Reports');
});

// @route     POST api/personAlert
// @desc      Add missing person
// @access    Private
router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('age', 'Wow thats old')
            .isInt(),
        check('hair', 'Hair is required')
            .not()
            .isEmpty(),
        check('height', 'Height is required')
            .not()
            .isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        const { name, age, hair, height, eyes, location, status, details, image } = req.body;

        try {
            let missing = new PersonAlert({
                name,
                age,
                hair,
                height,
                eyes,
                location,
                status,
                details,
                image
            });

            await missing.save()
            res.send('Added missing person');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// @route     PUT api/personAlert/:id
// @desc      Update missing person
// @access    Private
router.put('/:id', (req, res) => {
    res.send('Update missing person');
});

// @route     DELETE api/personAlert
// @desc      Delete missing person
// @access    Private
router.delete('/:id', (req, res) => {
    res.send('Delete missing person');
});

module.exports = router;