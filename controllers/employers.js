const express = require('express');
const router = express.Router();
const Employer = require('../models/employer');

/* GET: /api/employers */
router.get('/', async (req, res) => {
    /* callback syntax BEFORE mongoose 7 which is new
    Employer.find((err, employers) => {
        if (err) {
            res.json(err).status(400);
        }
        res.json(employers).status(200);
    });*/
    // new syntax w/o callback for mongoose 7 (march 2022)
    try {
        const employers = await Employer.find().sort('name');
        return res.json(employers).status(200);
    }
    catch (err) {
        return res.json(err).status(400);
    }
})

router.post('/', async(req, res) => {
    try {
        const employer = await Employer.create(req.body);
        return res.json(employer).status(201);
    }
    catch (err) {
        return res.json(err).status(400);
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        // mongoose remove() deprecated in v7+
        const employer = await Employer.findByIdAndDelete(req.params._id);
        return res.json(employer).status(204); // 204: No Content
    }
    catch (err) {
        return res.json(err).status(404);
    }
})

module.exports = router;