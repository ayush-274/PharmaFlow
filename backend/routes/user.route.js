import express from "express";
import { register,login,updateProfile } from "../controllers/user.controller.js";
import verifyToken from "../middleware/authentication.js";

const router = express.Router()

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(verifyToken,updateProfile);


export default router;