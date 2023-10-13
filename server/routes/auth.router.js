import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
const secret = process.env.SECRET;
const authRouter = express.Router();
import User from "../models/user.model.js";
import authVerify from "../middleware/auth.middleware.js";
import { signup, login } from "../controllers/auth.controller.js";

// user signup API
authRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Email already taken" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const registeredUser = await signup({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign({ email }, secret, { expiresIn: "24h" });

    res
      .status(201)
      .json({ message: "Registration successful", registeredUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, secret, { expiresIn: "24h" });

    res.json({ message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

authRouter.get("/user/profile", authVerify, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default authRouter;
