const express = require ("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//@route GET /api/orders/my-orders
// @desc Get all orders for the logged-in user
// @access Private

router.get