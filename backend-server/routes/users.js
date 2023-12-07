const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.post('/', async (req, res) => {
    const {username, email, password, accountType } = req.body;

    // Validate accountType
    if (accountType !== 'buyer' && accountType !== 'seller') {
        return res.status(400).json({ message: 'Invalid account type. Must be either "buyer" or "seller".' });
    }

    const newUser = new User({
        username,
        email,
        password,
        accountType,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    // Find user
    const user = await User.findOne({email});

    if (!user) {
        return res.status(400).json({message: 'Email not found'});
    }

    // Validate password
    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
        return res.status(400).json({message: 'Invalid password'});
    }

    // Exclude sensitive data
    const userObj = user.toObject();
    delete userObj.password;

    // At this point, the user is authenticated. You should issue them a token
    // and return user information.
    res.status(200).json({message: 'Logged in successfully', account: userObj});
});



module.exports = router;