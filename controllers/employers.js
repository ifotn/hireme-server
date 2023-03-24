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
        const employers = await Employer.find();
        return res.json(employers).status(200);
    }
    catch (err) {
        return res.json(err).status(400);
    }
})






module.exports = router;