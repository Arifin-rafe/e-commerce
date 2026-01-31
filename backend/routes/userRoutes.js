const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // registration logic here
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    user = new User({ name, email, password });
    await user.save();

    // create jwt payload
    const payload = { user: { id: user._id, role: user.role } };
    // sign and return token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET, {expiresIn: "40h" },(err, token) =>{
        if(err) throw err;

        // send user and token in respone
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          },
          token,
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

// @route   POST /api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user by email
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // create jwt payload
    const payload = { user: { id: user._id, role: user.role } };
    // sign and return token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET, {expiresIn: "40h" },(err, token) =>{
        if(err) throw err;

        // send user and token in respone
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          },
          token,
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route   GET /api/users/profile
// @desc    Get loggedin user profile
// @access  Private
router.get("/profile", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
