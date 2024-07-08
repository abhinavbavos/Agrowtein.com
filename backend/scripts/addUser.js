// backend/scripts/addUser.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('../config/db');

const addUser = async () => {
    await connectDB();

    const username = 'testuser';
    const password = 'testpassword';
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedPassword
    });

    await user.save();
    console.log('User added');
    mongoose.connection.close();
};

addUser().catch(err => console.error(err));
