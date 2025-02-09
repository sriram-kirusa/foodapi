const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    id: String,
    Name: String,
    Description: String,
    Region: String,
    FoodType: String,
    Ratings: String,
    Ingredients: String,
    Calories: String,
    Type: String,
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;

