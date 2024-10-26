const Item = require('../models/item');
const addItem = async (req, res) => {
  try {
    const { 
      itemName, itemCompanyName, itemSerialNo, itemSvvvNo, issueDate,
      adminName, adminContactNo, adminEmail, adminDepartmentName,
      adminBranchName, adminInstituteName 
    } = req.body;

    const newItem = new Item({
      itemName,
      itemCompanyName,
      itemSerialNo,
      itemSvvvNo,
      issueDate,
      admin: {
        name: adminName,
        contactNo: adminContactNo,
        email: adminEmail,
        departmentName: adminDepartmentName,
        branchName: adminBranchName,
        instituteName: adminInstituteName
      }
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
