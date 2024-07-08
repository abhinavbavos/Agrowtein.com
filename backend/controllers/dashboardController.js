// controllers/dashboardController.js

exports.userDashboard = (req, res) => {
    res.json({ message: 'Welcome to the user dashboard' });
  };
  
  exports.adminDashboard = (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard' });
  };
  