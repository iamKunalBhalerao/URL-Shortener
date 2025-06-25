import Router from  "express"
import { isAuth } from "../middlewares/auth.middleware.js"
import { getUserUrls } from "../controllers/user.controller.js"

const userRouter = Router()

userRouter.route("/urls").get(isAuth, getUserUrls)

export default userRouter