import { transaction } from "../Controllers/transactionController.js";
import { Router } from "express";

const router = Router();

router.post("transaction", transaction);

export default router;
