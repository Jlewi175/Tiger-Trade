const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.post('/', async (req, res) => {
    const {username, email, password, accountType } = req.body;

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

    const user = await User.findOne({email});

    if (!user) {
        return res.status(400).json({message: 'Email not found'});
    }

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
        return res.status(400).json({message: 'Invalid password'});
    }

    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({message: 'Logged in successfully', account: userObj});
});



module.exports = router;