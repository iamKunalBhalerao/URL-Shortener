import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utils/errorHandler.js";
import { attachUser } from "./src/utils/attachUser.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const whitelist = ["http://localhost:5173"]; // Add Your Hosted domsain name
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true); // Allow the request
      } else {
        console.log(`CORS Error: Origin ${origin} not allowed.`);
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },

    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
// app.use(attachUser);

// Route Imports
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";

// Router Calls
app.use("/api", shortUrlRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(errorHandler);

export default app;
