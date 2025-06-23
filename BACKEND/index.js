import dotenv from "dotenv";
dotenv.config("./.env");
import app from "./app.js";
import connectDB from "./src/config/db.config.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is Running on PORT:${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
