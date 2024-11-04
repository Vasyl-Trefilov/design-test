import { login, registration } from "../Controllers/authController.js";
import { Router } from "express";

const router = Router();

router.post("/login", login);
router.post("/registration", registration);

export default router;
