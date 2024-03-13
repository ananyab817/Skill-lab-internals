// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['pending', 'delivered'], default: 'pending' },
  otp: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Order', orderSchema);
