const User = require("../models/admin.js");

// Admin login
exports.loginAdmin = (req, res) => {
  const { name, email } = req.body;

  User.findOne({ where: { name, email } })
    .then(user => {
      if (user) {
        res.send("You are registered as admin");
      } else {
        res.status(404).send("Admin not found");
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Server error");
    });
};

// Student login
exports.loginStudent = (req, res) => {
  res.send("You are registered as student");
};