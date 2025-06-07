
const express = require('express');
const router = express.Router();
const { getDailyRecipe } = require('../controllers/recipeController');

router.get('/daily', getDailyRecipe);

module.exports = router;
