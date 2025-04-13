const express = require('express');
const router = express.Router();
const { sendFallAlert } = require('../controllers/alert.controller');

router.post('/alert', sendFallAlert);

module.exports = router;
