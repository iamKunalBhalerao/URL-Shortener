import { Router } from "express";
import {
  createShortUrl,
  redirectShortUrl,
} from "../controllers/shortUrl.controller.js";
import { isAuth, shortUrlAuth } from "../middlewares/auth.middleware.js";

const shortUrlRouter = Router();

shortUrlRouter.route("/").post(shortUrlAuth, createShortUrl);
shortUrlRouter.route("/:shortUrl").get(redirectShortUrl);

export default shortUrlRouter;
