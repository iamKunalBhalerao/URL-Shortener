import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utils/errorHandler.js";
import { attachUser } from "./src/utils/attachUser.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(attachUser);

// Route Imports
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import authRouter from "./src/routes/auth.route.js";

// Router Calls
app.use("/api", shortUrlRouter);
app.use("/api/auth", authRouter);

app.use(errorHandler);

export default app;
