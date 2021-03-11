const express = require('express');
const router = express.Router();

// @route     Get api/personAlert
// @desc      Get all missing person
// @access    Public
router.get('/', (req, res) => {
    res.send('See all Missing Reports');
});

// @route     POST api/personAlert
// @desc      Add missing person
// @access    Private
router.post('/', (req, res) => {
    res.send('Add missing person');
});

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