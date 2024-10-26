// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemCompanyName: { type: String, required: true },
  itemSerialNo: { type: String, required: true, unique: true },
  itemSvvvNo: { type: String, required: true },
  issueDate: { type: Date, required: true },
  status: { type: String, enum: ['active', 'discontinued'], default: 'active', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User schema
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
