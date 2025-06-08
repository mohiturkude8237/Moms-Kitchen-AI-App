const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        const lowerEmail = email.toLowerCase(); // Normalize email

        // Check if user already exists
        const existinguser = await User.findOne({ email: lowerEmail });
        console.log("🔍 Existing user:", existinguser); // Debug

        if (existinguser) {
            return res.status(400).json({
                error: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullname,
            email: lowerEmail,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: 'Signup successful! Please check your email to verify your account.'
        });

    } catch (err) {
        console.error("Signup error:", err); // Debug
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
