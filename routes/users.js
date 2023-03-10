const mongoose = require('mongoose');
const express = require('express');

const { Users, User } = require('../models/users');
const router = express.Router();


router.post('/', async (req, res) => {
    console.table(req.body);

    try {
        let user = await User.register(
            new User({
                email: req.body.email,
                username: req.body.username,
                roles:req.body.roles
            }),
            req.body.password);

        res.location(user._id)
            .status(201)
            .json(user._id);

    }
    catch (error) {
        res.status(400).json({ error: error });
        return;
    }
})

module.exports = router