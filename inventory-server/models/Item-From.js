const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  faculty: {
    name: {
      type: String,
      required: true
    },
    enrollmentNo: {
      type: String,
      required: true,
      unique: true
    },
    contactNo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    branchName: {
      type: String,
      required: true
    },
    departmentName: {
      type: String,
      required: true
    },
    instituteName: {
      type: String,
      required: true
    }
  },
  issueDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date
  },
 // ref. to Item model
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item', 
    required: true
  },
  remark: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
