import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongodbUrl = process.env.MONGO_URL;
// Replace with your MongoDB connection URL
const connectDatabase = () => {
    mongoose
        .connect(mongodbUrl)
        .then(() => {
        console.log("Connected to MongoDB");
    })
        .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};
export default connectDatabase;
//# sourceMappingURL=database.js.map