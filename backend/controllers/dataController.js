const SensorData = require('../models/SensorData');
const User = require('../models/User');

exports.getUserData = async (req, res) => {
  const userId = req.user.userId;
  const data = await SensorData.find({ user: userId });
  res.json(data);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().populate('products');
  res.json(users);
};

exports.updateUser = async (req, res) => {
  const { userId, updates } = req.body;
  const user = await User.findByIdAndUpdate(userId, updates, { new: true });
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.body;
  await User.findByIdAndDelete(userId);
  res.json({ message: 'User deleted' });
};
