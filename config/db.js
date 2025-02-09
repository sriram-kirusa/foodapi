const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/food_data", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error("MongoDB Connection Failed:", err);
        process.exit(1);
    }
};

module.exports = connectMongoDB;
