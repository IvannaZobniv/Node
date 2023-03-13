import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.post(
  "/register",
  userMiddleware.isIdValidCreate,
  userMiddleware.getDynamicallyAndThrow("email"),
  authController.register
);
router.post(
  "/login",
  userMiddleware.isIdValidLogin,
  userMiddleware.getDynamicallyOrThrow("email"),
  authController.login
);
router.post("/login");

export const authRouter = router;
