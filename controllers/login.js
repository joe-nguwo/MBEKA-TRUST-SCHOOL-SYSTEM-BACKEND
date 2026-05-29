import  Admin from "../models/admin.js";

// Admin login
export const loginAdmin = (req, res) => {
  const { name, email } = req.body;

  Admin.findOne({ where: { name:name,password:email } })
    .then(user => {
      if (user) {
        res.status(200).send("You are logged in as admin");
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
export const loginStudent = (req, res) => {
  res.send("You are registered as student");
};