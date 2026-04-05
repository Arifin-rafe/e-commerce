const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route   POST /api/cart
// @desc    Add a product to the cart for a guet or logged in user
// @access  Public

router.post('/', protect, async (req, res) => {
    
})