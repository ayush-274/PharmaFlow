import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Import jwt
import ChemistUser from "../models/ChemistUser.js"; // Import the ChemistUser model

const router = express.Router();

// Register a new chemist user
router.post("/register", async (req, res) => {
  try {
    const { name, email, mobileNumber, password, shopAddress } = req.body;

    // Check if the user already exists
    const existingUser = await ChemistUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new ChemistUser instance
    const newUser = new ChemistUser({
      name,
      email,
      mobileNumber,
      password: hashedPassword,
      shopAddress,
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "Chemist user registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering chemist user", error: error.message });
  }
});

// Chemist login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the chemist user by email
    const user = await ChemistUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Successful login
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

export default router;
