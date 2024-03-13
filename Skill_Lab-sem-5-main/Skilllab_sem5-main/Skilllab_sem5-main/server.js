const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
app.get('/api/user/:userId/orders', userController.getUserOrders);
app.post('/api/user/:userId/send-otp', orderController.sendOTP);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
