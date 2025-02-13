import { Router } from "express";
import userRouter from "./userRouter.js";
import transactionRouter from "./transactionRouter.js";

const router = Router();

router.use("/user", userRouter);
router.use("/transaction", transactionRouter);

export default router;
