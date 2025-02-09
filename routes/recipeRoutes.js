const express = require("express");
const router = express.Router();
const { getRecipes } = require("../controllers/recipeController");

// GET - Search Recipes by Filters
router.get("/filter", getRecipes);

module.exports = router;

