const router = require('express').Router();
const User = require('../models/user.model');

router.route('/signup').post(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    const newUser = new User({ username, password });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(400).json({ error: 'Username already exists. ' + err.message });
    }
});

module.exports = router;
