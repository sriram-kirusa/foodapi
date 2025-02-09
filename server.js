const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectMongoDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectMongoDB();

const PORT = process.env.PORT || 8000;

app.use("/api/foods", recipeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
