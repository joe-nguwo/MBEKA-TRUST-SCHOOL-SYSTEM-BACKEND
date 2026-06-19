import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Admin from "../models/admin.js";

dotenv.config();

// Admin login
export const loginAdmin = (req, res) => {
  const { name, email } = req.body;

  Admin.findOne({ where: { name: name, email: email } })
    .then((user) => {
      if (user) {

        const accessToken = jwt.sign(
          {
            name: name,
            email: email,
          },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: "1h" },
        );

        const refreshToken = jwt.sign({
          name:name,
          email:email,
          role:"admin"
        },process.env.REFRESH_TOKEN_KEY,{expiresIn:"8d"});

        res.status(200).json({status: 1,message: "you have succefuly loged in ",token: accessToken,
          });
        res.cookie("refresh token",refreshToken,{maxAge:9000,secure:true,sameSite:'lax'})
      
      } else {
        res.status(404).json({ status: 0, message: "Invalid credentials" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ status: 0, message: "Server error" });
    });
};

// Student login
export const loginStudent = (req, res) => {
  res.send("You are registered as student");
};
