const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        //check if user already exists

        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(400).json({
                error: 'user already exists'
            });
        }
        
    // 🔐 Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds

        //create mew user
        const newUser = new User({fullname, email, password:hashedPassword});
        await newUser.save();

        res.status(201).json({message: 'Signup successful! Please check your email to verify your account.'});
    }catch(err){
        res.status(500).json({error: "server error"});
    }
});

module.exports = router;
