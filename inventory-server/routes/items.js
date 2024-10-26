const express = require('express');
const router = express.Router();
const { addItem } = require('../controllers/itemController');
router.post('/items', addItem);
module.exports = router;
