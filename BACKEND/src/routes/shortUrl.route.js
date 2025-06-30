import { Router } from "express";
import {
  createShortUrl,
  redirectShortUrl,
} from "../controllers/shortUrl.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const shortUrlRouter = Router();

shortUrlRouter.route("/").post(isAuth, createShortUrl);
shortUrlRouter.route("/:shortUrl").get(redirectShortUrl);

export default shortUrlRouter;
