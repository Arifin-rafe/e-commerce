const express = require('express');
const User = require("../models/User")
const {protect, admin} = require("../middleware/authMiddleware")

const router = express.Router();

// @route   GET /api/admin/users
// @desc    Get all users
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// @route   POST /api/admin/users
// @desc    Create a new user (admin only)
// @access  Private/Admin

router.post('/', protect, admin, async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
})

module.exports = router;