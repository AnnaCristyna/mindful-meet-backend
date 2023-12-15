const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalController');

router.get('/professionals', professionalController.getProfessionals);

module.exports = router;
