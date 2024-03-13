// userController.js
const User = require('../models/user');

exports.getUserOrders = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userOrders = await Order.find({ userId }).populate('userId');
    res.status(200).json(userOrders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
