import express from "express";
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", shortUrlRouter);

app.use(errorHandler);

export default app;
