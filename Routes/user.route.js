import { Router } from "express";
import { userRegister } from "../Controller/userRegister.controller.js";
const router = Router();
router.post("/register", userRegister);
export default router;
