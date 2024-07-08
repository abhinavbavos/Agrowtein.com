// hashPassword.js
const bcrypt = require('bcryptjs');

const hashPassword = async (plainTextPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
  console.log('Hashed Password:', hashedPassword);
};

hashPassword('password'); // Replace 'password' with your plain text password
