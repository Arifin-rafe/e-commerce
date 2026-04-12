const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Helper function to get the cart for a guest or logged in user
const getCart = async (userId, guestId) => {
        if(userId) {
            return await Cart.findOne({ user: userId });
        } else if(guestId) {
            return await Cart.findOne({ guestId });
        }
        return null;
}
// @route   POST /api/cart
// @desc    Add a product to the cart for a guet or logged in user
// @access  Public

router.post('/', async (req, res) => {
    const {productId,quantity,size,color,guestId,userId} = req.body;
    try {
        const product = await Product.findById(productId);
        if(!product) return res.status(404).json({ message: "Product not found" });

        // Determine if the user is a guest or logged in
        let cart = await getCart(userId, guestId);

        // if cart exists, update it
        if(cart) {
            const productIndex = cart.products.findIndex((p) => p.productId.toString() === productId && 
            p.size === size && 
            p.color === color);
            if(productIndex > -1) {
                // if product already exists, update the quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // if product does not exist, add it to the cart
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity,
                });
            }
            // recalculate the total price
            cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 
            0
        );
        await cart.save();
        res.status(200).json(cart);
        } else {
            // if cart does not exist, create it for a guest or logged in user
            const newCart = await Cart.create({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [{
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity,
                }],
                totalPrice: product.price * quantity,
            });
            // await cart.save();
            res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;