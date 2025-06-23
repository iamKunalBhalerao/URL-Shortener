import express from "express";
import shortUrlRouter from "./src/routes/shortUrl.route.js";
import { errorHandler } from "./src/utils/errorHandler.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", shortUrlRouter);

app.use(errorHandler);

export default app;
