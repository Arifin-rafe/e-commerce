const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');
const products = require('./data/products');
dotenv.config();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed the database
const seedData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        // create default admin user
        const createdUser = await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: '123456',
            role: 'admin'
        });
        // assign the default user ID to each product

        const userID = createdUser._id;

        const sampleProducts = products.map(product => {
            return { ...product, userID }
        });

        // Insert sample products into the database
        await Product.insertMany(sampleProducts);
        console.log('product Data seeded successfully');
        process.exit();
    } 
};

        // Seed products
    } catch (error) {
        console.error('Error clearing existing data:', error);
    }
}