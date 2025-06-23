import { Router } from "express";
import {
  createShortUrl,
  redirectShortUrl,
} from "../controllers/shortUrl.controller.js";

const shortUrlRouter = Router();

shortUrlRouter.route("/").post(createShortUrl);
shortUrlRouter.route("/:shortUrl").get(redirectShortUrl);

export default shortUrlRouter;
