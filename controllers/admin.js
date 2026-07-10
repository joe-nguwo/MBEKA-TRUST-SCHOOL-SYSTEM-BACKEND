import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Admin from "../models/admin.js";

dotenv.config();

// Admin login
export const loginAdmin = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await Admin.findOne({ where: { name } });

    if (!user) {
      return res
        .status(404)
        .json({ status: 0, message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res
        .status(404)
        .json({ status: 0, message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      {
        name: user.name,
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      {
        name: user.name,
        role: "admin",
      },
      process.env.REFRESH_TOKEN_KEY,
      { expiresIn: "8d" }
    );

    res
      .status(200)
      .cookie("refresh-token",refreshToken, {
        maxAge: 8 * 24 * 60 * 60 * 1000,
        secure: false,
        sameSite: "lax",
      })
      .json({
        status: 1,
        message: "you have succefuly loged in ",
        token: accessToken,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 0, message: "Server error" });
  }
};

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPws = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name: name,
      email: email,
      password: hashedPws,
    });

    const refreshToken = jwt.sign(
      {
        name: admin.name,
        role: "admin",
      },
      process.env.REFRESH_TOKEN_KEY,
      { expiresIn: "7d" }
    );

    const accessToken = jwt.sign(
      {
        name: admin.name,
        email: admin.email,
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "1d" }
    );

    res
      .status(201)
      .cookie("jwt", refreshToken, {
        maxAge:  8 * 24 * 60 * 60 * 1000,
        secure: false,
        sameSite: "lax",
      })
      .json({
        status: 1,
        message: "Admin registered successfully",
        token: accessToken,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};