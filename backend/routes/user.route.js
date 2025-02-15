import express from "express";
import { loginUser, signupUser, logoutUser, getDailyAvg, postDailyCalorie, getUser, getDailyCalorie} from "../controllers/user.controller.js";
import {checkLoggedIn} from "../middleware/checkLoggedIn.middleware.js";
const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.get("/logout", logoutUser);

router.get("/get-user", checkLoggedIn, getUser);

router.get("/get-daily-avg", checkLoggedIn, getDailyAvg);

router.get("/get-daily-calorie", checkLoggedIn, getDailyCalorie);

router.post("/post-daily-calorie", checkLoggedIn, postDailyCalorie);
export default router;