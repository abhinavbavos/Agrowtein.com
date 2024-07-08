// backend/src/app.js
require('dotenv').config({ path: './config/.env' });  // Update this line to ensure correct path

console.log('Mongo URI:', process.env.MONGO_URI);
console.log('JWT Secret:', process.env.JWT_SECRET);

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('../config/db');
const errorHandler = require('../middleware/errorHandler');
const adminRoutes = require('../routes/admin');
const authRoutes = require('../routes/auth');

connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
