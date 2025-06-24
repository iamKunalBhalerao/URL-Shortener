import express from "express";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route Imports
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import authRouter from "./src/routes/auth.route.js";

// Router Calls
app.use("/api", shortUrlRouter);
app.use("/api/auth", authRouter);

app.use(errorHandler);

export default app;
