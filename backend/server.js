const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const subscribeRoute = require('./routes/subscribeRoute');
const adminRoutes = require('./routes/adminRoutes');
const productAdminRoutes = require('./routes/productAdminRoutes');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
//api routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); //create product route
app.use('/api/cart', cartRoutes); //create cart route
app.use('/api/checkout', checkoutRoutes); //create checkout route
app.use('/api/orders', orderRoutes); //create order route
app.use('/api/upload', uploadRoutes); //create upload route
app.use('/api', subscribeRoute); //create subscriber route


//Admin routes
app.use('/api/admin/users', adminRoutes); //create admin route
app.use('/api/admin/products', productAdminRoutes); //create product admin route


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});