const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  itemCompanyName: {
    type: String,
    required: true
  },
  itemSerialNo: {
    type: String,
    required: true,
    unique: true
  },
  itemSvvvNo: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'discontinued'],
    default: 'active',
    required: true
  },
  admin: {
    name: {
      type: String,
      required: true
    },
    contactNo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    departmentName: {
      type: String,
      required: true
    },
    branchName: {
      type: String,
      required: true
    },
    instituteName: {
      type: String,
      required: true
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
