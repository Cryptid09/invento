const Item = require('../models/item');
const User = require('../models/user');

const addItem = async (req, res) => {
  try {
    const { 
      itemName, itemCompanyName, itemSerialNo, itemSvvvNo, issueDate,
      createdBy
    } = req.body;

    
    const user = await User.findById(createdBy);
    if (!user) {
      return res.status(404).json({ error: 'Admin user not found' });
    }

    const newItem = new Item({
      itemName,
      itemCompanyName,
      itemSerialNo,
      itemSvvvNo,
      issueDate,
      createdBy: user._id // Reference the user ID
    });

    await newItem.save();
    res.status(201).json({ message: "Item added successfully", newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ error: "Failed to add item" });
  }
};

module.exports = {
  addItem
};
